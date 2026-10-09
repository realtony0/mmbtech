"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const text =
  "Nous sommes un studio digital né à Dakar. Nous transformons des idées enfouies en produits qui vivent en ligne : des sites qui inspirent confiance, des boutiques qui vendent, des applications qu'on garde sur son téléphone.";

function Word({ word, i, total, progress }: { word: string; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const opacity = useTransform(progress, [start, start + 1.5 / total], [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 45%"] });
  const words = text.split(" ");

  const stats = [
    ["15+", "projets en ligne"],
    ["3", "pays — Sénégal, France, Canada"],
    ["24h", "pour recevoir votre devis"],
    ["100%", "sur mesure, zéro template"],
  ];

  return (
    <section className="relative px-5 py-28 md:px-8 md:py-44 lg:pr-28">
      <p className="label mb-10 text-foam md:mb-14">( Manifeste ) — 010 m</p>
      <div ref={ref}>
        <p className="max-w-[22ch] font-display text-[9vw] font-semibold leading-[1.02] tracking-tight text-ice md:max-w-[24ch] md:text-[4.6vw]">
          {words.map((w, i) => (
            <Word key={i} word={w} i={i} total={words.length} progress={scrollYProgress} />
          ))}
        </p>
      </div>
      <div className="mt-20 grid grid-cols-2 gap-y-10 border-t border-ice/15 pt-8 md:mt-32 md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="font-display text-5xl font-bold text-white md:text-7xl">{n}</div>
            <div className="label mt-2 max-w-[18ch] text-ice/60">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
