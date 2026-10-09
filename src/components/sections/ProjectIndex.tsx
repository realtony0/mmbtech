"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/lib/data";

/** Full list of projects with a floating preview that follows the pointer. */
export function ProjectIndex() {
  const [hover, setHover] = useState<string | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 26 });
  const y = useSpring(my, { stiffness: 220, damping: 26 });

  return (
    <section
      className="relative px-5 py-24 md:px-8 md:py-36 lg:pr-28"
      onPointerMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">Index</h2>
        <span className="label text-ice/60">{projects.length} projets en ligne</span>
      </div>

      <ul className="border-t border-ice/20" onMouseLeave={() => setHover(null)}>
        {projects.map((p, i) => (
          <li key={p.id} className="border-b border-ice/20">
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="Visiter ↗"
              onMouseEnter={(e) => {
                if (!hover) {
                  x.jump(e.clientX);
                  y.jump(e.clientY);
                }
                mx.set(e.clientX);
                my.set(e.clientY);
                setHover(p.id);
              }}
              className={`group grid grid-cols-[32px_1fr_auto] items-center gap-3 py-4 transition-colors duration-500 md:grid-cols-[64px_1.3fr_1fr_1fr_32px] md:py-5 ${hover && hover !== p.id ? "text-ice/30" : "text-ice"}`}
            >
              <span className="label text-foam">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-xl font-semibold uppercase tracking-tight transition-transform duration-700 ease-expo group-hover:translate-x-2 md:text-3xl">
                {p.name}
              </span>
              <span className="label hidden md:block">{p.category}</span>
              <span className="label hidden md:block">{p.place}</span>
              <span className="text-right text-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      >
        <AnimatePresence>
          {hover && (
            <motion.div
              key={hover}
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -translate-y-1/2 translate-x-10 overflow-hidden rounded-md shadow-[0_30px_80px_rgba(0,0,0,.45)]"
              style={{ width: 360, aspectRatio: "16 / 10" }}
            >
              <Image src={`/projects/${hover}.webp`} alt="" fill sizes="360px" className="object-cover object-top" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
