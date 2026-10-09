"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/data";
import { RevealLines } from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="relative px-5 py-24 md:px-8 md:py-40 lg:pr-28">
      <div className="mb-14 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
        <h2 className="font-display text-[14vw] font-bold uppercase leading-[0.85] tracking-tight text-white md:text-[8vw]">
          <RevealLines lines={["Ce qu'on", "fabrique"]} />
        </h2>
        <p className="label max-w-xs text-ice/60">( Services ) — 025 m<br />Quatre métiers, une seule équipe, du premier croquis à la mise en ligne.</p>
      </div>

      <ul className="border-t border-ice/20">
        {services.map((s, i) => {
          const active = open === i;
          return (
            <li key={s.num} className="border-b border-ice/20">
              <button
                onClick={() => setOpen(active ? null : i)}
                onMouseEnter={() => setOpen(i)}
                aria-expanded={active}
                data-cursor={active ? "" : "Ouvrir"}
                className="group grid w-full grid-cols-[48px_1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[120px_1fr_auto] md:py-9"
              >
                <span className="label text-foam">{s.num}</span>
                <span className={`font-display text-4xl font-bold uppercase tracking-tight transition-all duration-700 ease-expo md:text-7xl ${active ? "translate-x-0 text-white" : "text-ice/45 group-hover:translate-x-3"}`}>
                  {s.title}
                </span>
                <span className={`text-2xl text-ice transition-transform duration-700 ease-expo md:text-4xl ${active ? "rotate-45" : ""}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-10 md:grid-cols-[120px_1fr_1fr] md:pb-14">
                      <span className="hidden md:block" />
                      <p className="max-w-lg text-base leading-relaxed text-ice/80 md:text-lg">{s.desc}</p>
                      <ul className="flex flex-wrap content-start gap-2">
                        {s.items.map((it) => (
                          <li key={it} className="label rounded-full border border-ice/25 px-4 py-2 text-ice/85">{it}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
