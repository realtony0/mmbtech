"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

const fade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } };

export function Services() {
  return (
    <section id="services" className="px-5 md:px-14 py-20 md:py-36 bg-white">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="flex items-end justify-between mb-10 md:mb-16">
        <div>
          <SectionLabel>Ce que nous faisons</SectionLabel>
          <h2 className="font-sans font-extrabold leading-none tracking-[-2px] md:tracking-[-3px]" style={{ fontSize: "clamp(36px,6vw,88px)" }}>
            Nos <em className="font-serif font-normal italic text-blue not-italic">services</em>
          </h2>
        </div>
        <span className="font-mono text-xs text-muted hidden md:block">04 SERVICES</span>
      </motion.div>

      <div className="flex flex-col">
        {services.map((s) => (
          <motion.div
            key={s.num}
            variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="group grid grid-cols-[40px_1fr] md:grid-cols-[72px_1fr_40px] items-start gap-4 md:gap-12 py-7 md:py-11 border-t border-black/[0.09] last:border-b relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-pale scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />

            <span className="relative z-10 font-mono text-xs text-muted pt-1">{s.num}</span>

            <div className="relative z-10">
              <div className="text-xl md:text-[26px] font-bold tracking-[-0.5px] mb-2 font-sans group-hover:text-blue transition-colors">
                {s.title}
              </div>
              <div className="text-sm text-muted leading-[1.8] font-light max-w-xl">{s.desc}</div>
            </div>

            <span className="relative z-10 text-[22px] text-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pt-1 hidden md:block">
              →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
