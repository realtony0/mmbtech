"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const lines = Array.from({ length: 14 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 900,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.12,
      w: Math.random() * 0.8 + 0.2,
      a: Math.random() * 0.08 + 0.02,
      len: Math.random() * 260 + 80,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach((l) => {
        l.x += l.vx; l.y += l.vy;
        if (l.x > canvas.width + l.len) l.x = -l.len;
        if (l.x < -l.len) l.x = canvas.width + l.len;
        if (l.y < 0 || l.y > canvas.height) l.vy *= -1;
        const g = ctx.createLinearGradient(l.x, l.y, l.x + l.len, l.y);
        g.addColorStop(0, "rgba(0,71,255,0)");
        g.addColorStop(0.5, `rgba(0,71,255,${l.a})`);
        g.addColorStop(1, "rgba(0,71,255,0)");
        ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(l.x + l.len, l.y);
        ctx.strokeStyle = g; ctx.lineWidth = l.w; ctx.stroke();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center md:justify-end px-5 md:px-14 pb-12 md:pb-20 pt-24 md:pt-[100px] overflow-hidden bg-cream">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(100px,20vw,320px)] font-extrabold text-transparent pointer-events-none z-0 font-sans whitespace-nowrap select-none"
        style={{ WebkitTextStroke: "1px rgba(10,10,15,0.04)" }}>
        MMBTECH
      </span>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 border border-black/[0.09] rounded-full font-mono text-[10px] md:text-xs tracking-[1.5px] uppercase text-muted bg-white/70 mb-6 md:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse2" />
          Agence disponible — Dakar
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          className="font-sans font-extrabold leading-[0.92] tracking-[-2px] md:tracking-[-4px] mb-8 md:mb-12"
          style={{ fontSize: "clamp(48px,9.5vw,148px)" }}
        >
          <span className="block">Nous</span>
          <span className="block text-outline">construisons</span>
          <span className="block font-serif font-normal italic text-blue" style={{ WebkitTextStroke: "0" }}>votre</span>
          <span className="block">digital.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10"
        >
          <p className="max-w-md text-sm md:text-base leading-[1.75] text-muted font-light">
            Sites web, apps mobiles et e-commerce pour les marques ambitieuses.
            Basés à Dakar, nous livrons partout.
          </p>
          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            <Link href="#portfolio" className="px-6 md:px-9 py-3 md:py-4 bg-blue text-white text-sm font-semibold rounded-full hover:bg-ink transition-all hover:-translate-y-0.5">
              Nos projets
            </Link>
            <Link href="#contact" className="text-sm text-muted hover:text-blue transition-colors">
              Contact →
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-5 md:right-14 bottom-12 md:bottom-20 hidden md:flex flex-col items-center gap-2.5 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-blue to-transparent" />
        <span className="font-mono text-[10px] tracking-[3px] uppercase text-muted [writing-mode:vertical-rl]">Défiler</span>
      </div>
    </section>
  );
}
