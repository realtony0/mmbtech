"use client";
import { motion } from "framer-motion";
import { pricing, whatsappLink } from "@/lib/data";
import { RevealLines } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <section id="tarifs" className="relative px-5 py-24 md:px-8 md:py-40 lg:pr-28">
      <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <h2 className="font-display text-[14vw] font-bold uppercase leading-[0.85] tracking-tight text-white md:text-[8vw]">
          <RevealLines lines={["Tarifs", "clairs"]} />
        </h2>
        <p className="label max-w-xs text-ice/60">( Offres ) — 085 m<br />Paiement fractionné possible. Devis détaillé gratuit sous 24h.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {pricing.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            className={`relative flex flex-col rounded-md p-7 md:p-9 ${p.featured ? "bg-ice text-abyss" : "glass text-ice"}`}
          >
            <div className="flex items-center justify-between">
              <span className={`label ${p.featured ? "text-sea" : "text-foam"}`}>{p.name}</span>
              {p.featured && <span className="label rounded-full bg-abyss px-3 py-1 text-[10px] text-ice">Le plus choisi</span>}
            </div>
            <div className="mt-10 font-display text-5xl font-bold tracking-tight md:text-6xl">
              {p.price}
              <span className="label ml-2 align-middle opacity-60">{p.unit}</span>
            </div>
            <p className={`mt-3 text-sm ${p.featured ? "text-abyss/70" : "text-ice/65"}`}>{p.desc}</p>
            <ul className="mb-10 mt-8 space-y-0">
              {p.features.map((f) => (
                <li key={f} className={`flex gap-3 border-t py-3 text-sm ${p.featured ? "border-abyss/15" : "border-ice/15"}`}>
                  <span className="label pt-0.5 opacity-60">+</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(`Bonjour MMBTECH, l'offre ${p.name} m'intéresse.`)}
              target="_blank"
              rel="noreferrer"
              data-cursor="Discuter"
              className={`label mt-auto flex items-center justify-between rounded-full px-6 py-4 transition-colors duration-500 ${
                p.featured ? "bg-abyss text-ice hover:bg-deep" : "border border-ice/30 hover:bg-ice hover:text-abyss"
              }`}
            >
              {p.name === "Application" ? "Parler de mon app" : "Démarrer"}
              <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
