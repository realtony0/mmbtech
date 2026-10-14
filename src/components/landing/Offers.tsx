import { pricing } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";

export function Offers() {
  return (
    <section id="offres" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">Nos offres</p>
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Des prix clairs, sans surprise</h2>
        <p className="mt-4 text-lg text-muted">Paiement en plusieurs fois possible. Devis gratuit et détaillé sous 24h.</p>
      </div>

      <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
        {pricing.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl p-7 ${
              p.featured ? "bg-blue text-white shadow-pop lg:-mt-4 lg:pb-11 lg:pt-11" : "border border-line bg-white shadow-card"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-sun px-4 py-1.5 text-[13px] font-extrabold text-ink">
                Le plus demandé
              </span>
            )}
            <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
            <p className={`mt-1 text-[15px] ${p.featured ? "text-white/80" : "text-muted"}`}>{p.tagline}</p>
            <div className="mt-6">
              {p.from && <span className={`block text-sm font-semibold ${p.featured ? "text-white/80" : "text-muted"}`}>À partir de</span>}
              <span className="font-display text-[44px] font-extrabold leading-none tracking-tight">{p.price}</span>
              <span className="ml-1.5 font-bold">{p.unit}</span>
            </div>
            <ul className="mb-8 mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-[15px]">
                  <svg viewBox="0 0 20 20" aria-hidden className={`mt-0.5 h-5 w-5 shrink-0 ${p.featured ? "fill-sun" : "fill-wa"}`}>
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-1.2 14.2L4.6 10l1.4-1.4 2.8 2.8 5.2-5.2 1.4 1.4-6.6 6.6z" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <WaLink
              placement={`offre-${p.name}`}
              message={`Bonjour MMBTECH, l'offre ${p.name} (${p.from ? "à partir de " : ""}${p.price} ${p.unit}) m'intéresse.`}
              className={`mt-auto ${p.featured ? "btn bg-white text-blue hover:bg-sun hover:text-ink" : "btn-wa"}`}
            >
              <WaIcon />
              Choisir {p.name}
            </WaLink>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-[15px] text-muted">
        Un besoin différent ? Logo, identité visuelle, refonte d&apos;un site existant :{" "}
        <WaLink placement="offre-autre" message="Bonjour MMBTECH, j'ai un besoin spécifique :" className="font-bold text-blue underline">
          demandez un devis sur mesure
        </WaLink>
        .
      </p>
    </section>
  );
}
