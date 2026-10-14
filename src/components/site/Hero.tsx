import Image from "next/image";
import { projects } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";
import { Arrow } from "./ui";

const colA = ["carrevip", "serva", "heritagedress", "luxurymarket221", "aboufamily"];
const colB = ["healthy", "senbarber", "sse", "loyalty", "orlex"];
const row = ["carrevip", "healthy", "serva", "senbarber", "loyalty", "sse", "heritagedress", "orlex"];
const name = (id: string) => projects.find((p) => p.id === id)?.name ?? id;

function Shot({ id, eager }: { id: string; eager?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-white shadow-frame">
      <Image
        src={`/projects/thumb/${id}.webp`}
        alt={`Site ${name(id)} réalisé par MMBTECH`}
        width={720}
        height={450}
        sizes="(min-width:1024px) 300px, 260px"
        loading={eager ? "eager" : "lazy"}
        className="block h-auto w-full"
      />
    </div>
  );
}

function Column({ ids, dir, eager }: { ids: string[]; dir: "up" | "down"; eager?: boolean }) {
  const list = [...ids, ...ids];
  return (
    <div className={`flex flex-col gap-4 ${dir === "up" ? "animate-up" : "animate-down"}`}>
      {list.map((id, i) => (
        <div key={i} aria-hidden={i >= ids.length}>
          <Shot id={id} eager={eager && i < 2} />
        </div>
      ))}
    </div>
  );
}

const facts = ["Devis gratuit sous 24 h", "Paiement en plusieurs fois", "Paiement mobile & WhatsApp intégrés"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(#0A0B0F0a_1px,transparent_1px),linear-gradient(90deg,#0A0B0F0a_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_30%_20%,#000,transparent_70%)]"
      />
      <div className="wrap relative grid items-center gap-12 pb-14 pt-12 sm:pt-16 lg:min-h-[640px] lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pb-0 lg:pt-0">
        <div className="lg:py-24">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-muted shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
            </span>
            Agence web à Dakar · disponible pour vos projets
          </p>
          <h1 className="text-[44px] font-semibold leading-[0.98] sm:text-[64px] lg:text-[76px]">
            Des sites web
            <br />
            qui font <span className="font-serif font-normal italic tracking-[-0.02em] text-blue">vendre</span>.
          </h1>
          <p className="lead mt-6 max-w-[34rem]">
            Sites vitrines, boutiques en ligne et applications, conçus sur mesure pour les entreprises du Sénégal et d&apos;ailleurs. Rapides, beaux sur téléphone, et pensés pour transformer vos visiteurs en clients.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WaLink placement="hero" className="btn-primary !h-[52px] !px-7 text-base">
              <WaIcon className="h-[18px] w-[18px]" />
              Demander mon devis gratuit
            </WaLink>
            <a href="#realisations" className="btn-line !h-[52px] !px-7 text-base">
              Voir nos réalisations
              <Arrow />
            </a>
          </div>
          <div className="mt-10 flex items-end gap-8 border-t border-line pt-6">
            <div>
              <p className="text-[13px] text-muted">Site vitrine dès</p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] tabular-nums">
                135 000 <span className="text-base font-medium text-muted">FCFA</span>
              </p>
            </div>
            <ul className="hidden flex-col gap-1.5 text-[14px] text-muted sm:flex">
              {facts.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-blue" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wall of real client sites */}
        <div aria-label="Aperçu de nos réalisations" className="relative hidden h-[640px] grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(transparent,#000_14%,#000_86%,transparent)] lg:grid">
          <Column ids={colA} dir="up" eager />
          <div className="pt-16">
            <Column ids={colB} dir="down" eager />
          </div>
        </div>
      </div>

      {/* Mobile: horizontal band */}
      <div aria-hidden className="relative -mt-2 mb-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] lg:hidden">
        <div className="flex w-max animate-left gap-3 px-3">
          {[...row, ...row].map((id, i) => (
            <div key={i} className="w-[240px]">
              <Shot id={id} eager={i < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
