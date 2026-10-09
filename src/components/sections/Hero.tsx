"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/components/ui/SmoothScroll";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { ready } = useApp();
  const [zero, setZero] = useState(false);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
    const onZero = () => {
      setZero(true);
      setTimeout(() => setZero(false), 3800);
    };
    window.addEventListener("mmb:zero", onZero);
    return () => window.removeEventListener("mmb:zero", onZero);
  }, []);

  return (
    <section
      id="top"
      data-draw
      data-cursor={fine ? "Cliquez & dessinez un zéro" : undefined}
      className="relative flex h-[100svh] min-h-[560px] select-none flex-col justify-end overflow-hidden px-5 pb-6 md:px-8 md:pb-8"
    >
      {/* top meta */}
      <motion.div
        className="label absolute left-5 right-5 top-20 grid grid-cols-2 gap-4 text-ice/75 md:left-8 md:right-28 md:top-28 md:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <span>Studio digital<br />indépendant</span>
        <span>Sites web · E-commerce<br />Applications · Design</span>
        <span className="hidden md:block">Dakar, Sénégal<br />Projets partout</span>
        <span className="hidden md:block">Devis gratuit<br />sous 24h</span>
      </motion.div>

      {/* centre prompt */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {zero ? (
            <motion.p
              key="zero"
              className="max-w-xl px-6 text-center font-display text-3xl font-bold leading-tight text-white md:text-5xl"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease }}
            >
              Parfait. Partir de zéro,<br />c&apos;est notre spécialité.
            </motion.p>
          ) : fine ? null : (
            <motion.p
              key="hint"
              className="label text-ice/80"
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: [0.35, 1, 0.35] } : {}}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              Faites défiler
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* wordmark + baseline */}
      <div className="relative">
        <h1 className="sr-only">MMBTECH — studio digital à Dakar : sites web, e-commerce et applications mobiles.</h1>
        <div aria-hidden className="overflow-hidden">
          <motion.div
            className="melt font-display font-bold uppercase leading-[0.8] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(64px, 19.5vw, 340px)" }}
            initial={{ y: "100%" }}
            animate={ready ? { y: "0%" } : {}}
            transition={{ duration: 1.4, ease, delay: 0.1 }}
          >
            mmbtech
          </motion.div>
        </div>
        <motion.div
          className="mt-4 flex flex-col gap-4 border-t border-ice/25 pt-4 md:mt-6 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease, delay: 0.5 }}
        >
          <p className="max-w-md text-base leading-snug text-ice md:text-lg">
            On conçoit des sites, des boutiques et des applications qui font remonter votre marque à la surface.
          </p>
          <div className="label flex items-center gap-6 text-ice/80 md:pr-20">
            <span>Profondeur 000 m</span>
            <span className="flex items-center gap-2">
              Plonger
              <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>↓</motion.span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
