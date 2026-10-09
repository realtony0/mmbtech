"use client";
import { motion } from "framer-motion";
import { steps } from "@/lib/data";
import { RevealLines } from "@/components/ui/Reveal";

/** The process as an ascent: from -100 m (the idea) up to 0 m (online). */
export function Method() {
  return (
    <section id="methode" className="relative px-5 py-24 md:px-8 md:py-40 lg:pr-28">
      <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
        <h2 className="font-display text-[14vw] font-bold uppercase leading-[0.85] tracking-tight text-white md:text-[8vw]">
          <RevealLines lines={["Remonter", "à la surface"]} />
        </h2>
        <p className="label max-w-xs text-ice/60">( Méthode ) — 070 m<br />Cinq paliers, de l&apos;idée enfouie au lancement. Vous validez chaque étape.</p>
      </div>

      <ol className="relative grid gap-px overflow-hidden rounded-md bg-ice/15 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            className="group relative flex min-h-[220px] flex-col justify-between bg-abyss/70 p-6 backdrop-blur-md transition-colors duration-700 hover:bg-deep/80 md:min-h-[420px] md:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="label text-foam">Palier 0{i + 1}</span>
              <span className="label text-ice/50">{s.depth === 0 ? "000" : s.depth} m</span>
            </div>
            <div className="md:mt-auto">
              <div
                className="mb-6 hidden h-px bg-ice/30 md:block"
                style={{ width: `${20 + i * 20}%` }}
              />
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-[2.2vw]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ice/70">{s.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
