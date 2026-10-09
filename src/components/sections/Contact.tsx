"use client";
import { useState } from "react";
import { contact, whatsappLink } from "@/lib/data";
import { RevealLines } from "@/components/ui/Reveal";

const types = ["Site web", "Boutique en ligne", "Application mobile", "Identité & design", "Autre"];
const budgets = ["< 200K FCFA", "200K – 500K", "500K – 1M", "> 1M FCFA"];

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div role="radiogroup" aria-label={name} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          type="button"
          role="radio"
          aria-checked={value === o}
          key={o}
          onClick={() => onChange(value === o ? "" : o)}
          className={`label rounded-full border px-4 py-2.5 transition-colors duration-300 ${
            value === o ? "border-ice bg-ice text-abyss" : "border-ice/25 text-ice/80 hover:border-ice/60"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function Contact() {
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    const lines = [
      `Bonjour MMBTECH, je suis ${String(fd.get("name") || "").trim()}.`,
      type && `Projet : ${type}`,
      budget && `Budget : ${budget}`,
      email && `Email : ${email}`,
    ].filter(Boolean);
    lines.push("", String(fd.get("message") || "").trim());
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  const field = "w-full border-b border-ice/25 bg-transparent py-4 text-lg text-ice outline-none transition-colors placeholder:text-ice/35 focus:border-ice md:text-xl";

  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-40 lg:pr-28">
      <p className="label mb-8 text-foam">( Contact ) — 100 m · On remonte ensemble ?</p>
      <h2 className="melt font-display text-[19vw] font-bold uppercase leading-[0.8] tracking-[-0.04em] text-white md:text-[13vw]">
        <RevealLines lines={["Parlons", "projet."]} />
      </h2>

      <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-[1fr_1.4fr] md:gap-24">
        <div className="flex flex-col gap-8">
          <p className="max-w-sm text-lg leading-snug text-ice/80">
            Racontez-nous votre idée. Vous recevez une proposition claire et chiffrée sous 24h — sans engagement.
          </p>
          <div className="flex flex-col gap-5">
            {[
              ["WhatsApp", contact.phone, whatsappLink()],
              ["Email", contact.email, `mailto:${contact.email}`],
              ["Téléphone", contact.phone, `tel:+${contact.phoneRaw}`],
            ].map(([k, v, href]) => (
              <a key={k} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" data-cursor="Écrire" className="group border-t border-ice/15 pt-3">
                <span className="label block text-ice/50">{k}</span>
                <span className="font-display text-2xl font-semibold text-white transition-transform duration-700 ease-expo group-hover:translate-x-2 md:text-3xl">
                  {v}
                </span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="glass flex flex-col gap-8 rounded-md p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <label>
              <span className="label text-ice/55">Votre nom *</span>
              <input name="name" required autoComplete="name" placeholder="Awa Diop" className={field} />
            </label>
            <label>
              <span className="label text-ice/55">Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="awa@entreprise.sn" className={field} />
            </label>
          </div>
          <div className="flex flex-col gap-3">
            <span className="label text-ice/55">Type de projet</span>
            <Chips name="Type de projet" options={types} value={type} onChange={setType} />
          </div>
          <div className="flex flex-col gap-3">
            <span className="label text-ice/55">Budget</span>
            <Chips name="Budget" options={budgets} value={budget} onChange={setBudget} />
          </div>
          <label>
            <span className="label text-ice/55">Votre projet *</span>
            <textarea name="message" required rows={3} placeholder="Décrivez votre idée en quelques lignes…" className={`${field} resize-none`} />
          </label>
          <button
            type="submit"
            data-cursor="Envoyer"
            className="label group flex items-center justify-between rounded-full bg-ice px-7 py-5 text-abyss transition-colors duration-500 hover:bg-white"
          >
            Envoyer via WhatsApp
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
