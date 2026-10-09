"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: glowing comet that trails the pointer, a contextual label
 * (set with data-cursor="…" on any element) and, inside [data-draw], a
 * drawing mode — draw a closed loop to trigger a "mmb:zero" event.
 */
export function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    if (fine) {
      setEnabled(true);
      document.documentElement.classList.add("has-cursor");
    }

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2, tx: window.innerWidth / 2, ty: window.innerHeight / 2 };
    const tail: { x: number; y: number }[] = [];
    let strokes: { pts: { x: number; y: number }[]; life: number }[] = [];
    let drawing: { x: number; y: number }[] | null = null;
    let seen = false;
    let lastTarget: Element | null = null;
    // the element under a still pointer changes while scrolling
    const onScroll = () => {
      if (!fine || !seen) return;
      const el = document.elementFromPoint(pos.tx, pos.ty);
      if (el !== lastTarget) { lastTarget = el; setLabel(el); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const setLabel = (el: Element | null) => {
      const target = el?.closest("[data-cursor]") as HTMLElement | null;
      const text = target?.dataset.cursor || "";
      const lbl = labelRef.current;
      if (lbl && lbl.textContent !== text) lbl.textContent = text;
      if (lbl) lbl.style.opacity = text ? "1" : "0";
    };

    const onMove = (e: PointerEvent) => {
      pos.tx = e.clientX;
      pos.ty = e.clientY;
      if (!seen) { pos.x = pos.tx; pos.y = pos.ty; seen = true; }
      if (fine) setLabel(e.target as Element);
      lastTarget = e.target as Element;
      if (drawing) drawing.push({ x: e.clientX, y: e.clientY });
    };
    const onDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest?.("[data-draw]")) return;
      if ((e.target as Element).closest("a,button,input,textarea,select")) return;
      drawing = [{ x: e.clientX, y: e.clientY }];
    };
    const onUp = () => {
      if (!drawing) return;
      const pts = drawing;
      drawing = null;
      strokes.push({ pts, life: 1 });
      if (isLoop(pts)) {
        window.dispatchEvent(new CustomEvent("mmb:zero"));
        window.dispatchEvent(new CustomEvent("mmb:pulse"));
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    let raf = 0;
    const render = () => {
      pos.x += (pos.tx - pos.x) * 0.22;
      pos.y += (pos.ty - pos.y) * 0.22;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // drawn strokes fade out
      strokes = strokes.filter((s) => (s.life -= 0.012) > 0);
      for (const s of [...strokes, ...(drawing ? [{ pts: drawing, life: 1 }] : [])]) {
        ctx.strokeStyle = `rgba(228,247,240,${0.85 * s.life})`;
        ctx.shadowColor = "rgba(228,247,240,0.9)";
        ctx.shadowBlur = 16;
        ctx.lineWidth = 6;
        ctx.beginPath();
        s.pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.stroke();
      }
      ctx.shadowBlur = 0;

      if (fine && seen) {
        // comet tail
        tail.unshift({ x: pos.x, y: pos.y });
        if (tail.length > 18) tail.pop();
        for (let i = tail.length - 1; i > 0; i--) {
          const a = 1 - i / tail.length;
          ctx.strokeStyle = `rgba(228,247,240,${a * 0.5})`;
          ctx.lineWidth = 7 * a + 1;
          ctx.beginPath();
          ctx.moveTo(tail[i].x, tail[i].y);
          ctx.lineTo(tail[i - 1].x, tail[i - 1].y);
          ctx.stroke();
        }
        const g = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 16);
        g.addColorStop(0, "rgba(255,255,255,0.55)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 4.5, 0, Math.PI * 2);
        ctx.fill();

        if (labelRef.current) labelRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };
    if (!reduce || fine) raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-[9998] h-full w-full" />
      {enabled && (
        <div
          ref={labelRef}
          aria-hidden
          className="label pointer-events-none fixed left-0 top-0 z-[9999] whitespace-nowrap pl-6 pt-4 text-ice opacity-0 transition-opacity duration-300"
          style={{ textShadow: "0 0 12px rgba(3,24,26,.6)" }}
        />
      )}
    </>
  );
}

/** A stroke counts as a loop if it is big enough and ends near where it started. */
function isLoop(pts: { x: number; y: number }[]) {
  if (pts.length < 12) return false;
  let len = 0, minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    if (i) len += Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y);
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
  }
  const size = Math.min(maxX - minX, maxY - minY);
  const gap = Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].y - pts[pts.length - 1].y);
  return size > 70 && len > 250 && gap < Math.max(60, size * 0.45);
}
