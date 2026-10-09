"use client";
import { useEffect, useRef } from "react";

const marks = [0, -25, -50, -75, -100];

/** Fixed vertical depth gauge: 0 m at the top of the page, -100 m at the bottom. */
export function DepthRuler() {
  const markerRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    let cur = 0;
    const loop = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      cur += (p - cur) * 0.12;
      if (markerRef.current) markerRef.current.style.top = `${cur * 100}%`;
      if (valueRef.current) valueRef.current.textContent = `${cur < 0.005 ? "000" : "-" + String(Math.round(cur * 100)).padStart(3, "0")} m`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed bottom-[18vh] right-5 top-[18vh] z-40 hidden w-16 lg:block">
      <div className="relative h-full">
        {Array.from({ length: 41 }, (_, i) => (
          <span
            key={i}
            className="absolute right-0 h-px bg-ice/40"
            style={{ top: `${(i / 40) * 100}%`, width: i % 10 === 0 ? 14 : 6 }}
          />
        ))}
        {marks.map((m, i) => (
          <span key={m} className="label absolute right-5 -translate-y-1/2 text-[9px] text-ice/50" style={{ top: `${i * 25}%` }}>
            {m}
          </span>
        ))}
        <div ref={markerRef} className="absolute right-0 flex -translate-y-1/2 items-center gap-2">
          <span ref={valueRef} className="label whitespace-nowrap text-[10px] text-ice">000 m</span>
          <span className="h-[2px] w-14 bg-ice shadow-[0_0_12px_rgba(228,247,240,.9)]" />
        </div>
      </div>
    </div>
  );
}
