"use client";
import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`;

// Domain-warped noise + voronoi "ice cracks / caustics", tinted by depth (scroll).
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uScroll;
uniform float uPulse;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}
float cracks(vec2 p) {
  vec2 n = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int j = -1; j <= 1; j++)
  for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 o = hash2(n + g);
    o = 0.5 + 0.5 * sin(uTime * 0.25 + 6.2831 * o);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
  }
  return d2 - d1;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  vec2 m = (uMouse - 0.5 * uRes) / uRes.y;
  float t = uTime * 0.035;
  float md = length(p - m);

  // ripple around the pointer
  vec2 dir = normalize(p - m + 1e-4);
  float ripple = sin(md * 28.0 - uTime * 2.6) * exp(-md * 3.5) * (0.035 + uPulse * 0.08);
  vec2 q = p * 1.5 + vec2(0.0, uScroll * 3.0) + dir * ripple;

  vec2 w = vec2(fbm(q + t), fbm(q + vec2(5.2, 1.3) - t));
  float n = fbm(q + 1.8 * w);

  float c = cracks(q * 2.2 + w * 1.4);
  float caustic = pow(1.0 - smoothstep(0.0, 0.11, c), 2.2) * mix(0.3, 1.0, smoothstep(0.3, 0.75, n));
  float frost = smoothstep(0.62, 0.95, fbm(q * 3.0 - w));

  // depth: 0 at the surface (top of the page) -> 1 deep (middle) -> back up near the end
  float depth = clamp(uScroll * 1.6, 0.0, 1.0) * (1.0 - smoothstep(0.88, 1.0, uScroll) * 0.45);

  vec3 abyss = vec3(0.012, 0.094, 0.102);
  vec3 deep  = vec3(0.04, 0.21, 0.20);
  vec3 sea   = vec3(0.17, 0.48, 0.41);
  vec3 ice   = vec3(0.80, 0.95, 0.90);

  float g = uv.y * 0.55 + n * 0.65;
  vec3 surface = mix(sea, mix(sea, ice, 0.55), smoothstep(0.55, 1.15, 1.0 - uv.y + n * 0.4));
  vec3 below = mix(abyss, deep, smoothstep(0.15, 0.95, g));
  vec3 col = mix(surface, below, depth);

  float light = mix(0.38, 0.14, depth);
  col = mix(col, ice, caustic * light + frost * mix(0.22, 0.05, depth));
  col += vec3(0.55, 0.9, 0.8) * exp(-md * 5.0) * (0.10 + uPulse * 0.25);

  col *= 1.0 - 0.45 * pow(length(uv - 0.5), 1.6);
  col += (hash(gl_FragCoord.xy + fract(uTime * 7.0)) - 0.5) * 0.055;
  gl_FragColor = vec4(col, 1.0);
}
`;

export function Ocean() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, powerPreference: "high-performance" });
    if (!gl) {
      canvas.style.background = "radial-gradient(120% 90% at 50% 0%, #2c7a69, #0a3633 55%, #03181a)";
      return;
    }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = u("uRes"), uTime = u("uTime"), uMouse = u("uMouse"), uScroll = u("uScroll"), uPulse = u("uPulse");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const scale = coarse ? 0.45 : 0.6;

    let w = 0, h = 0;
    const resize = () => {
      w = Math.round(window.innerWidth * scale);
      h = Math.round(window.innerHeight * scale);
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0.5, y: 0.35, tx: 0.5, ty: 0.35 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let pulse = 0;
    const onPulse = () => { pulse = 1; };
    window.addEventListener("mmb:pulse", onPulse);

    let scroll = 0, raf = 0, visible = true;
    const start = performance.now();
    const frame = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = max > 0 ? window.scrollY / max : 0;
      scroll += (target - scroll) * 0.08;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      pulse *= 0.97;

      gl.uniform1f(uTime, reduce ? 12 : (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, mouse.x * w, (1 - mouse.y) * h);
      gl.uniform1f(uScroll, scroll);
      gl.uniform1f(uPulse, pulse);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (visible) raf = requestAnimationFrame(frame);
    };
    frame();

    const onVis = () => {
      visible = !document.hidden;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mmb:pulse", onPulse);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="fixed inset-0 -z-10 h-full w-full" />;
}
