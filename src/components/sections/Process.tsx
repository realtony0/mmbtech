"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const fade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } };

const steps = [
  { num: "01", title: "Échange", desc: "On discute de votre projet, vos objectifs et vos besoins. Vous recevez un devis gratuit sous 24h." },
  { num: "02", title: "Maquette", desc: "On crée le design de votre site ou application. Vous validez chaque écran avant le développement." },
  { num: "03", title: "Création", desc: "On construit votre projet. Vous suivez l'avancement et testez au fur et à mesure." },
  { num: "04", title: "Livraison", desc: "Votre projet est en ligne. On vous accompagne avec un support dédié après le lancement." },
];

export function Process() {
  return (
    <section id="process" className="px-5 md:px-14 py-20 md:py-36 bg-white">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionLabel>Comment ça marche</SectionLabel>
        <h2
          className="font-sans font-extrabold leading-none tracking-[-2px] md:tracking-[-3px] mb-3 md:mb-4"
          style={{ fontSize: "clamp(36px,6vw,88px)" }}
        >
          4&nbsp;étapes<br />
          <em className="font-serif font-normal italic text-blue not-italic">simples</em>
        </h2>
        <p className="text-sm md:text-[15px] text-muted mb-10 md:mb-16 max-w-lg leading-[1.7]">
          De l&apos;idée au lancement, on s&apos;occupe de tout.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative rounded-2xl border border-black/[0.09] bg-cream p-6 md:p-8 hover:border-blue hover:shadow-[0_24px_48px_rgba(0,71,255,.09)] transition-all hover:-translate-y-1"
          >
            <div className="font-mono text-[11px] tracking-[3px] text-blue mb-4 md:mb-5">{s.num}</div>
            <h3 className="font-sans font-bold text-[18px] md:text-[20px] mb-2 md:mb-3 text-ink">{s.title}</h3>
            <p className="text-[13px] text-muted leading-[1.7]">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-center text-muted/40 text-lg">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
