"use client";
import { useState } from "react";
import { budgets, contact, projectTypes } from "@/lib/data";
import { track, whatsappWithRef } from "@/lib/track";
import { WaIcon, WaLink } from "@/components/WaLink";

function Choice({ id, label, options, value, onChange }: { id: string; label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset className="min-w-0">
      <legend id={id} className="mb-3 text-[14px] font-medium text-ink">{label}</legend>
      <div role="radiogroup" aria-labelledby={id} className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onChange(on ? "" : o)}
              className={`h-10 rounded-full px-4 text-[14px] font-medium transition-all ${
                on ? "bg-ink text-white" : "bg-white text-ink shadow-[inset_0_0_0_1px_#E5E7EC] hover:shadow-[inset_0_0_0_1px_#0A0B0F]"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Contact() {
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

  const field =
    "h-12 w-full rounded-xl bg-white px-4 text-[15px] text-ink shadow-[inset_0_0_0_1px_#E5E7EC] outline-none transition-shadow placeholder:text-faint focus:shadow-[inset_0_0_0_2px_#0047FF]";

  return (
    <section id="contact" className="bg-ink py-20 text-white sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 [&>*]:min-w-0">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/60 before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue before:content-['']">
            Devis gratuit
          </p>
          <h2 className="h2 mt-4">
            Parlons de votre <span className="font-serif font-normal italic tracking-[-0.02em] text-[#7FA2FF]">projet</span>.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/65">
            Trois questions, et votre demande s&apos;ouvre dans WhatsApp, prête à envoyer. Vous recevez une proposition claire et chiffrée sous 24 h, sans engagement.
          </p>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
            <div className="bg-ink-soft p-5">
              <dt className="text-[13px] text-white/50">WhatsApp & téléphone</dt>
              <dd className="mt-1 select-all text-xl font-semibold tracking-[-0.02em]">{contact.phone}</dd>
            </div>
            <div className="bg-ink-soft p-5">
              <dt className="text-[13px] text-white/50">Email</dt>
              <dd className="mt-1 select-all text-xl font-semibold tracking-[-0.02em]">{contact.email}</dd>
            </div>
            <div className="bg-ink-soft p-5 sm:col-span-2 lg:col-span-1">
              <dt className="text-[13px] text-white/50">Studio</dt>
              <dd className="mt-1 text-xl font-semibold tracking-[-0.02em]">Dakar, Sénégal</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="reveal flex flex-col gap-7 rounded-2xl bg-paper p-6 text-ink sm:p-9">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-medium">Prénom *</span>
              <input id="lead-name" name="name" required autoComplete="given-name" placeholder="Awa" className={field} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-medium">Entreprise ou activité</span>
              <input id="lead-business" name="business" autoComplete="organization" placeholder="Boutique de mode" className={field} />
            </label>
          </div>
          <Choice id="lead-type" label="Votre projet" options={projectTypes} value={type} onChange={setType} />
          <Choice id="lead-budget" label="Budget envisagé (FCFA)" options={budgets} value={budget} onChange={setBudget} />
          <label className="flex flex-col gap-2">
            <span className="text-[14px] font-medium">Téléphone</span>
            <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="77 000 00 00" className={field} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[14px] font-medium">En quelques mots</span>
            <textarea id="lead-message" name="message" rows={3} placeholder="Je veux vendre mes produits en ligne…" className={`${field} h-auto resize-none py-3`} />
          </label>
          <button type="submit" className="btn-primary !h-14 w-full text-base">
            <WaIcon className="h-[18px] w-[18px]" />
            Envoyer ma demande sur WhatsApp
          </button>
          {sent ? (
            <p role="status" className="rounded-xl bg-blue-tint p-4 text-[14.5px] leading-relaxed">
              WhatsApp s&apos;est ouvert avec votre message : appuyez sur <strong>Envoyer</strong>. Rien ne s&apos;est ouvert ?{" "}
              <WaLink placement="form-fallback" className="font-semibold text-blue underline underline-offset-2">
                Écrivez-nous directement
              </WaLink>
              .
            </p>
          ) : (
            <p className="-mt-2 text-center text-[13px] text-faint">Vos informations servent uniquement à vous répondre.</p>
          )}
        </form>
      </div>
    </section>
  );
}
