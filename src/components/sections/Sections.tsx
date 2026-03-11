"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pricing } from "@/lib/data";

const fade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } };

/* ── PRICING ── */
export function Pricing() {
  return (
    <section id="pricing" className="px-5 md:px-14 py-20 md:py-36 bg-white">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionLabel>Nos offres</SectionLabel>
        <h2 className="font-sans font-extrabold leading-none tracking-[-2px] md:tracking-[-3px] mb-3 md:mb-4" style={{ fontSize: "clamp(36px,6vw,88px)" }}>
          Tarifs<br /><em className="font-serif font-normal italic text-blue not-italic">transparents</em>
        </h2>
        <p className="text-sm md:text-[15px] text-muted mb-10 md:mb-16 max-w-lg leading-[1.7]">
          Paiement fractionné disponible. Devis gratuit sous 24h.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pricing.map((p, i) => (
          <motion.div
            key={p.name} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-2xl p-7 md:p-11 border transition-all hover:-translate-y-1 ${
              p.featured
                ? "bg-blue border-blue text-white hover:shadow-[0_24px_48px_rgba(0,71,255,.3)]"
                : "bg-cream border-black/[0.09] hover:border-blue hover:shadow-[0_24px_48px_rgba(0,71,255,.09)]"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-ink text-white text-[11px] font-bold tracking-[1.5px] uppercase rounded-full font-mono whitespace-nowrap">
                Populaire
              </span>
            )}
            <div className={`font-mono text-[11px] tracking-[3px] uppercase mb-5 md:mb-6 ${p.featured ? "text-white/55" : "text-muted"}`}>{p.name}</div>
            <div className="font-serif italic text-[36px] md:text-[48px] leading-none tracking-[-1px] mb-1.5">
              {p.price}<span className="text-[14px] md:text-[16px] font-sans font-normal not-italic opacity-50 ml-2">{p.unit}</span>
            </div>
            <div className={`text-[13px] mb-7 md:mb-9 leading-[1.7] ${p.featured ? "text-white/55" : "text-muted"}`}>{p.desc}</div>
            <ul className="mb-8 md:mb-10 space-y-0">
              {p.features.map((f) => (
                <li key={f} className={`flex items-center gap-2.5 py-2.5 md:py-3 border-b text-[13px] ${p.featured ? "border-white/12 text-white/82" : "border-black/[0.09] text-ink"}`}>
                  <span className={`text-[12px] font-bold shrink-0 ${p.featured ? "text-white/50" : "text-blue"}`}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="#contact"
              className={`block w-full py-3.5 md:py-4 text-center rounded-full text-[13px] font-bold transition-all ${
                p.featured
                  ? "bg-white text-blue hover:bg-cream"
                  : "border-[1.5px] border-black/[0.09] text-ink hover:border-blue hover:text-blue"
              }`}>
              {p.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── CONTACT ── */
export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = `${fd.get("prenom") || ""} ${fd.get("nom") || ""}`.trim();
    const type = fd.get("type") || "";
    const msg = fd.get("message") || "";
    const text = `Bonjour, je suis ${name}.%0AProjet : ${type}%0A%0A${msg}`;
    window.open(`https://wa.me/221774992742?text=${encodeURIComponent(String(text))}`, "_blank");
  }

  return (
    <section id="contact" className="px-5 md:px-14 py-20 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionLabel>Travaillons ensemble</SectionLabel>
        <h2 className="font-sans font-extrabold leading-[.95] tracking-[-2px] md:tracking-[-3px] mb-6 md:mb-8" style={{ fontSize: "clamp(36px,6.5vw,96px)" }}>
          Vous avez<br />un <em className="font-serif font-normal italic text-blue not-italic">projet ?</em>
        </h2>
        <p className="text-sm md:text-[15px] text-muted leading-[1.8] mb-8 md:mb-12">
          Partagez votre vision. Nous vous répondons sous 24h avec une proposition adaptée.
        </p>
        <div className="flex flex-col gap-4">
          {[
            { icon: "✉", label: "contact@mmb-tech.com", href: "mailto:contact@mmb-tech.com" },
            { icon: "📞", label: "+221 77 499 27 42", href: "tel:+221774992742" },
            { icon: "📍", label: "Dakar, Sénégal", href: "#" },
          ].map((c) => (
            <Link key={c.label} href={c.href} className="flex items-center gap-3 md:gap-4 text-sm md:text-[15px] text-ink hover:text-blue transition-colors group">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] bg-blue-pale border border-blue/12 flex items-center justify-center text-sm md:text-base shrink-0 group-hover:bg-blue transition-colors">
                {c.icon}
              </div>
              {c.label}
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[{ label: "Prénom", name: "prenom", placeholder: "Mamadou" }, { label: "Nom", name: "nom", placeholder: "Diop" }].map((f) => (
              <div key={f.label} className="p-4 md:p-5 border border-black/[0.09] -m-px focus-within:border-blue focus-within:z-10 bg-white transition-colors">
                <label className="block font-mono text-[10px] tracking-[2.5px] uppercase text-muted mb-2">{f.label}</label>
                <input type="text" name={f.name} placeholder={f.placeholder} required className="w-full bg-transparent border-none outline-none text-sm text-ink placeholder:text-muted/50" />
              </div>
            ))}
          </div>
          <div className="p-4 md:p-5 border border-black/[0.09] -mt-px focus-within:border-blue focus-within:z-10 bg-white transition-colors">
            <label className="block font-mono text-[10px] tracking-[2.5px] uppercase text-muted mb-2">Email</label>
            <input type="email" name="email" placeholder="vous@entreprise.sn" className="w-full bg-transparent border-none outline-none text-sm text-ink placeholder:text-muted/50" />
          </div>
          <div className="p-4 md:p-5 border border-black/[0.09] -mt-px focus-within:border-blue focus-within:z-10 bg-white transition-colors">
            <label className="block font-mono text-[10px] tracking-[2.5px] uppercase text-muted mb-2">Type de projet</label>
            <select name="type" className="w-full bg-transparent border-none outline-none text-sm text-ink">
              <option>— Choisir —</option>
              <option>Site web</option>
              <option>Application mobile</option>
              <option>Boutique en ligne</option>
              <option>Design & identité visuelle</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="p-4 md:p-5 border border-black/[0.09] -mt-px focus-within:border-blue focus-within:z-10 bg-white transition-colors">
            <label className="block font-mono text-[10px] tracking-[2.5px] uppercase text-muted mb-2">Votre message</label>
            <textarea name="message" placeholder="Décrivez votre projet..." rows={4} required className="w-full bg-transparent border-none outline-none text-sm text-ink placeholder:text-muted/50 resize-none" />
          </div>
          <button type="submit" className="py-4 md:py-5 px-9 bg-blue text-white border border-black/[0.09] border-t-0 font-sans text-sm font-bold hover:bg-ink transition-colors -mt-px">
            Envoyer sur WhatsApp →
          </button>
        </form>
      </motion.div>
    </section>
  );
}

/* ── FOOTER ── */
export function Footer() {
  const socials = [
    { label: "Instagram", href: "https://instagram.com/mmbtech.sn", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
    { label: "LinkedIn", href: "https://linkedin.com/company/mmbtech", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  ];

  return (
    <footer className="px-5 md:px-14 py-8 md:py-10 border-t border-black/[0.09] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">
      <span className="font-mono text-sm font-bold tracking-[2px]">MMB<span className="text-blue">TECH</span></span>
      <span className="text-xs text-muted">© {new Date().getFullYear()} Mmbtech. Tous droits réservés.</span>
      <div className="flex items-center gap-5">
        {socials.map((s) => (
          <Link key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-muted hover:text-blue transition-colors">
            {s.icon}
          </Link>
        ))}
        <span className="w-px h-4 bg-black/[0.09]" />
        <Link href="#" className="text-xs text-muted hover:text-blue transition-colors">Mentions légales</Link>
      </div>
    </footer>
  );
}
