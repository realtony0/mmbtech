"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "./SmoothScroll";

export function Preloader() {
  const { setReady } = useApp();
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      setReady(true);
      return;
    }
    let loaded = false;
    Promise.all([
      document.fonts?.ready,
      new Promise((r) => (document.readyState === "complete" ? r(0) : window.addEventListener("load", r, { once: true }))),
    ]).then(() => (loaded = true));

    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const t = (performance.now() - start) / 1700;
      // ease towards 100, but hold at 92 until assets are in
      const target = Math.min(loaded ? 100 : 92, Math.round(100 * (1 - Math.pow(1 - Math.min(t, 1), 3))));
      setN((v) => Math.max(v, target));
      if (loaded && t >= 1) {
        setN(100);
        setTimeout(() => {
          setDone(true);
          setReady(true);
        }, 250);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [setReady]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9990] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-deep via-sea to-foam p-5 md:p-8"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="label flex justify-between text-ice/80">
            <span>MMBTECH — Studio digital</span>
            <span className="hidden md:block">Dakar · 14°41′N 17°26′W</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="font-display text-[28vw] font-bold leading-[0.78] tracking-tighter text-white md:text-[16vw]">
              {String(n).padStart(2, "0")}
            </span>
            <span className="label mb-3 text-deep">Chargement</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
