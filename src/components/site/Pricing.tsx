import { pricing } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";
import { Check } from "./ui";

export function Pricing() {
  return (
    <section id="tarifs" className="border-t border-line bg-paper py-20 sm:py-28">
      <div className="wrap">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="kicker">Tarifs</p>
          <h2 className="h2 mt-4">Des prix clairs. Sans surprise.</h2>
          <p className="lead mt-5">Paiement en plusieurs fois possible. Chaque projet commence par un devis gratuit et détaillé.</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pricing.map((p, i) => {
            const dark = p.featured;
            return (
              <article
                key={p.name}
                className={`reveal relative flex flex-col rounded-2xl p-7 sm:p-8 ${dark ? "bg-ink text-white shadow-frame" : "bg-white shadow-soft"}`}
                style={{ ["--d" as string]: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {dark && <span className="rounded-full bg-blue px-2.5 py-1 text-[12px] font-semibold">Le plus choisi</span>}
                </div>
                <p className={`mt-1.5 text-[15px] ${dark ? "text-white/60" : "text-muted"}`}>{p.tagline}</p>
                <div className="mt-8 flex items-baseline gap-2">
                  {p.from && <span className={`text-[14px] ${dark ? "text-white/60" : "text-muted"}`}>dès</span>}
                  <span className="text-[44px] font-semibold leading-none tracking-[-0.045em] tabular-nums">{p.price}</span>
                  <span className={`text-[15px] font-medium ${dark ? "text-white/60" : "text-muted"}`}>{p.unit}</span>
                </div>
                <ul className={`mb-9 mt-8 space-y-3 border-t pt-7 text-[15px] ${dark ? "border-white/10" : "border-line"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check className={`h-4 w-4 ${dark ? "text-[#7FA2FF]" : "text-blue"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <WaLink
                  placement={`offre-${p.name}`}
                  message={`Bonjour MMBTECH, l'offre ${p.name} (${p.from ? "dès " : ""}${p.price} ${p.unit}) m'intéresse.`}
                  className={`mt-auto w-full ${dark ? "btn-primary" : "btn-line"}`}
                >
                  <WaIcon className="h-4 w-4" />
                  Choisir {p.name}
                </WaLink>
              </article>
            );
          })}
        </div>
        <p className="reveal mt-8 text-center text-[15px] text-muted">
          Logo, identité visuelle, refonte d&apos;un site existant ?{" "}
          <WaLink placement="offre-autre" message="Bonjour MMBTECH, j'ai un besoin spécifique :" className="font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-blue">
            Demandez un devis sur mesure
          </WaLink>
        </p>
      </div>
    </section>
  );
}
