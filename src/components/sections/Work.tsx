"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { RevealLines } from "@/components/ui/Reveal";

const featured = projects.filter((p) => p.featured);

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      data-cursor="Visiter ↗"
      className="group relative block w-[86vw] shrink-0 md:w-[min(52vw,85vh)] lg:w-[min(42vw,82vh)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] bg-deep">
        <Image
          src={`/projects/${p.id}.webp`}
          alt={`Site ${p.name}`}
          fill
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 52vw, 86vw"
          loading="eager"
          className="object-cover object-top transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 right-3 w-[20%] overflow-hidden rounded-[10px] border-2 border-abyss shadow-2xl transition-transform duration-1000 ease-expo group-hover:-translate-y-2 md:bottom-5 md:right-5 md:w-[16%]">
          <Image src={`/projects/${p.id}-m.webp`} alt="" width={390} height={844} loading="eager" className="h-auto w-full" />
        </div>
        <span className="label absolute left-4 top-4 text-white/90">{String(i + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white md:text-4xl">{p.name}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ice/70">{p.desc}</p>
        </div>
        <div className="label shrink-0 text-right text-foam">
          {p.category}
          <br />
          <span className="text-ice/50">{p.place}</span>
        </div>
      </div>
    </a>
  );
}

export function Work() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [horizontal, setHorizontal] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      setHorizontal(mq.matches);
      if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [horizontal]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -dist]), { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const header = (
    <div className="mb-10 flex flex-col justify-between gap-6 px-5 md:mb-8 md:flex-row md:items-end md:px-8 lg:pr-28">
      <h2 className="font-display text-[14vw] font-bold uppercase leading-[0.85] tracking-tight text-white md:text-[6vw]">
        <RevealLines lines={horizontal ? ["Projets récents"] : ["Projets", "récents"]} />
      </h2>
      <p className="label max-w-xs text-ice/60">( Réalisations ) — 040 m<br />Des marques de Dakar, de France et du Canada nous ont confié leur présence en ligne.</p>
    </div>
  );

  if (!horizontal) {
    return (
      <section id="projets" ref={section} className="relative py-24">
        {header}
        <div className="flex flex-col gap-14 px-5">
          {featured.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <Card p={p} i={i} />
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projets" ref={section} className="relative" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
        {header}
        <motion.div ref={track} style={{ x }} className="flex w-max gap-8 px-8 lg:gap-12">
          {featured.map((p, i) => (
            <Card key={p.id} p={p} i={i} />
          ))}
        </motion.div>
        <div className="mx-8 mt-8 h-px bg-ice/15">
          <motion.div className="h-px bg-ice" style={{ width: bar }} />
        </div>
      </div>
    </section>
  );
}
