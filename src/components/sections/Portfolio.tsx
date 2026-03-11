"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

const fade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } };

function BrowserMockup({ desktopImg, mobileImg, name }: { desktopImg: string; mobileImg: string; name: string }) {
  return (
    <div className="relative w-full">
      {/* Browser frame */}
      <div className="rounded-xl md:rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_24px_64px_rgba(0,0,0,.12)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-[#f0ece4] border-b border-black/[0.06]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
          </div>
          <div className="flex-1 mx-2 md:mx-8">
            <div className="bg-white/80 rounded-md px-3 py-1 text-[10px] md:text-[11px] text-muted text-center font-mono truncate">
              {name.toLowerCase().replace(/\s/g, "")}.com
            </div>
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative bg-white">
          <Image
            src={desktopImg}
            alt={`${name} - Capture desktop`}
            width={1440}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Mobile overlay */}
      <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-4 w-[80px] md:w-[120px] rounded-xl md:rounded-2xl overflow-hidden border-[3px] md:border-4 border-[#1c1c2e] shadow-[0_16px_40px_rgba(0,0,0,.25)] z-10">
        <Image
          src={mobileImg}
          alt={`${name} - Capture mobile`}
          width={390}
          height={844}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="px-5 md:px-14 py-20 md:py-36 bg-cream">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-20">
        <div>
          <SectionLabel>Nos réalisations</SectionLabel>
          <h2 className="font-sans font-extrabold leading-none tracking-[-2px] md:tracking-[-3px]" style={{ fontSize: "clamp(36px,6vw,88px)" }}>
            Projets<br /><em className="font-serif font-normal italic text-blue not-italic">récents</em>
          </h2>
        </div>
        <Link href="#contact" className="text-sm text-blue font-semibold border-b border-blue pb-0.5 hover:opacity-70 transition-opacity self-start md:self-auto">
          Démarrer un projet →
        </Link>
      </motion.div>

      <div className="flex flex-col gap-20 md:gap-36">
        {projects.map((p, i) => {
          const isEven = i % 2 !== 0;
          return (
            <motion.div
              key={p.id}
              variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center ${isEven ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={isEven ? "lg:[direction:ltr]" : ""}>
                <BrowserMockup desktopImg={p.desktopImg} mobileImg={p.mobileImg} name={p.name} />
              </div>

              <div className={isEven ? "lg:[direction:ltr]" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] tracking-[3px] text-muted">{p.num}</span>
                  <span className="px-3 py-1 rounded-full bg-blue/10 text-blue text-[11px] font-semibold tracking-[0.5px]">{p.category}</span>
                </div>
                <h3 className="font-sans font-extrabold leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] mb-4" style={{ fontSize: "clamp(28px,3.5vw,48px)" }}>
                  {p.name}
                </h3>
                <p className="text-sm md:text-[15px] leading-[1.8] text-muted font-light mb-6">{p.desc}</p>
                <Link href={p.url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 bg-blue text-white rounded-full text-[13px] font-semibold hover:bg-ink transition-all hover:-translate-y-0.5">
                  Visiter le site ↗
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
