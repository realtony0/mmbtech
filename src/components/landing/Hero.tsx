import Image from "next/image";
import { WaIcon, WaLink } from "@/components/WaLink";

const proofs = ["15+ sites en ligne", "Paiement mobile intégré", "Clients au Sénégal, en France et au Canada"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-blue-soft via-white to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24">
        <div>
          <p className="eyebrow mb-4">Agence web à Dakar</p>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[64px]">
            Un site qui vous <span className="mark">ramène des clients</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Site vitrine, boutique en ligne ou application : on crée votre présence en ligne, de A à Z, avec paiement mobile et WhatsApp intégrés.
          </p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-sm font-semibold text-muted">À partir de</span>
            <span className="font-display text-4xl font-extrabold text-blue">135 000</span>
            <span className="font-bold">FCFA</span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WaLink placement="hero" className="btn-wa text-base">
              <WaIcon />
              Recevoir mon devis gratuit
            </WaLink>
            <a href="#realisations" className="btn-ghost text-base">Voir nos réalisations</a>
          </div>

          <ul className="mt-7 flex flex-col gap-2 text-[15px] font-semibold sm:flex-row sm:flex-wrap sm:gap-x-5">
            {proofs.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" aria-hidden className="h-5 w-5 shrink-0 fill-wa"><path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-1.2 14.2L4.6 10l1.4-1.4 2.8 2.8 5.2-5.2 1.4 1.4-6.6 6.6z" /></svg>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Mockups of real client sites */}
        <div className="relative mx-auto w-full max-w-[560px] pb-8 lg:pb-0">
          <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
            <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 truncate rounded bg-white px-2 py-0.5 text-[11px] text-muted">carrevip.vercel.app</span>
            </div>
            <Image src="/projects/carrevip.webp" alt="Site du Carré VIP réalisé par MMBTECH" width={1440} height={900} priority sizes="(min-width:1024px) 560px, 92vw" className="h-auto w-full" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-[30%] overflow-hidden rounded-[18px] border-[5px] border-ink bg-ink shadow-card sm:-left-6">
            <Image src="/projects/healthy-m.webp" alt="Site mobile Healthy Dakar réalisé par MMBTECH" width={390} height={844} priority sizes="170px" className="h-auto w-full" />
          </div>
          <div className="absolute -right-1 bottom-6 rounded-2xl bg-white px-4 py-3 shadow-card sm:-right-5">
            <div className="text-[12px] font-semibold text-muted">Devis gratuit</div>
            <div className="font-display text-xl font-extrabold">sous 24h</div>
          </div>
        </div>
      </div>
    </section>
  );
}
