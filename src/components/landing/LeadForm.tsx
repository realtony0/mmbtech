"use client";
import { useState } from "react";
import { budgets, contact, projectTypes } from "@/lib/data";
import { track, whatsappWithRef } from "@/lib/track";
import { WaIcon, WaLink } from "@/components/WaLink";

function Chips({ id, label, options, value, onChange }: { id: string; label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend id={id} className="mb-2 text-[15px] font-bold">{label}</legend>
      <div role="radiogroup" aria-labelledby={id} className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={value === o}
            onClick={() => onChange(value === o ? "" : o)}
            className={`rounded-full border-2 px-4 py-2.5 text-[14px] font-semibold transition-colors ${
              value === o ? "border-blue bg-blue text-white" : "border-line bg-white hover:border-ink"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function LeadForm() {
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) || "").trim();
    const lines = [
      `Bonjour MMBTECH, je suis ${get("name")}${get("business") ? ` (${get("business")})` : ""}.`,
      type && `Projet : ${type}`,
      budget && `Budget : ${budget} FCFA`,
      get("phone") && `Mon numéro : ${get("phone")}`,
    ].filter(Boolean) as string[];
    if (get("message")) lines.push("", get("message"));

    track("Lead", { content_category: type || "non précisé", content_name: "formulaire-devis" });
    const url = whatsappWithRef(lines.join("\n"));
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
    setSent(true);
  }

  const input = "w-full rounded-xl border-2 border-line bg-white px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-blue";

  return (
    <section id="devis" className="bg-gradient-to-b from-blue-soft to-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-3">Devis gratuit</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Recevez votre devis <span className="mark">sous 24h</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Répondez à 3 questions, votre demande s&apos;ouvre dans WhatsApp, prête à envoyer. Sans engagement.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="text-[13px] font-bold uppercase tracking-wide text-muted">WhatsApp & téléphone</div>
              <div className="mt-1 select-all font-display text-2xl font-extrabold">{contact.phone}</div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="text-[13px] font-bold uppercase tracking-wide text-muted">Email</div>
              <div className="mt-1 select-all font-display text-2xl font-extrabold">{contact.email}</div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-[15px] font-bold">Votre prénom *</span>
              <input id="lead-name" name="name" required autoComplete="given-name" placeholder="Awa" className={input} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[15px] font-bold">Votre activité</span>
              <input id="lead-business" name="business" autoComplete="organization" placeholder="Boutique de mode" className={input} />
            </label>
          </div>
          <Chips id="lead-type" label="Que voulez-vous créer ?" options={projectTypes} value={type} onChange={setType} />
          <Chips id="lead-budget" label="Votre budget (FCFA)" options={budgets} value={budget} onChange={setBudget} />
          <label className="flex flex-col gap-2">
            <span className="text-[15px] font-bold">Votre numéro (pour vous rappeler)</span>
            <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="77 000 00 00" className={input} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[15px] font-bold">Votre projet en une phrase</span>
            <textarea id="lead-message" name="message" rows={3} placeholder="Je veux vendre mes produits en ligne avec paiement Wave…" className={`${input} resize-none`} />
          </label>
          <button type="submit" className="btn-wa w-full text-base">
            <WaIcon />
            Envoyer ma demande sur WhatsApp
          </button>
          {sent && (
            <p role="status" className="rounded-xl bg-blue-soft p-4 text-[15px]">
              WhatsApp s&apos;est ouvert avec votre message : il ne reste qu&apos;à appuyer sur <strong>Envoyer</strong>. Rien ne s&apos;est ouvert ?{" "}
              <WaLink placement="form-fallback" className="font-bold text-blue underline">Écrivez-nous directement</WaLink>.
            </p>
          )}
          <p className="text-center text-[13px] text-muted">Vos informations servent uniquement à vous répondre.</p>
        </form>
      </div>
    </section>
  );
}
