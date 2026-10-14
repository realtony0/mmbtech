import { projects, type Project } from "@/lib/data";
import { ArrowUpRight, BrowserFrame, PhoneFrame } from "./ui";

function Meta({ p }: { p: Project }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {p.tags.map((t) => (
        <li key={t} className="rounded-full bg-paper px-2.5 py-1 text-[12.5px] font-medium text-muted">{t}</li>
      ))}
    </ul>
  );
}

/** Large case study: text on one side, framed desktop + phone on the other. */
function Feature({ p, flip }: { p: Project; flip?: boolean }) {
  return (
    <article className="reveal grid items-center gap-8 rounded-2xl bg-paper p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-12">
      <div className={flip ? "lg:order-2" : ""}>
        <p className="text-[13px] font-medium text-muted">
          {p.category} · {p.place}
        </p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{p.name}</h3>
        <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-muted">{p.desc}</p>
        <div className="mt-6">
          <Meta p={p} />
        </div>
        <a href={p.url} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-blue">
          Visiter le site
          <ArrowUpRight />
        </a>
      </div>
      <a href={p.url} target="_blank" rel="noopener" tabIndex={-1} aria-hidden className={`group relative block pb-6 pr-6 sm:pb-8 sm:pr-10 ${flip ? "lg:order-1" : ""}`}>
        <BrowserFrame id={p.id} url={p.url} alt="" sizes="(min-width:1024px) 640px, 90vw" className="transition-transform duration-500 group-hover:-translate-y-1" />
        <PhoneFrame id={p.id} alt="" className="absolute bottom-0 right-0 w-[24%] transition-transform duration-500 group-hover:-translate-y-2" />
      </a>
    </article>
  );
}

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <a href={p.url} target="_blank" rel="noopener" className="reveal group block" style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
      <div className="rounded-2xl bg-paper p-4 transition-colors duration-300 group-hover:bg-[#ECEEF2] sm:p-5">
        <BrowserFrame id={p.id} url={p.url} alt={`Site ${p.name}`} thumb sizes="(min-width:1024px) 360px, (min-width:640px) 45vw, 90vw" className="transition-transform duration-500 group-hover:-translate-y-1" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 px-1">
        <div>
          <h3 className="text-[17px] font-semibold tracking-[-0.02em]">{p.name}</h3>
          <p className="mt-0.5 text-[14px] text-muted">{p.category} · {p.place}</p>
        </div>
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-[inset_0_0_0_1px_#E5E7EC] transition-colors group-hover:bg-ink group-hover:text-white group-hover:shadow-none">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const big = featured.slice(0, 2);
  const grid = featured.slice(2);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="realisations" className="py-20 sm:py-28">
      <div className="wrap">
        <div className="reveal grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="kicker">Réalisations</p>
            <h2 className="h2 mt-4">
              {projects.length} sites en ligne.
              <br />
              <span className="text-faint">Allez les visiter.</span>
            </h2>
          </div>
          <p className="lead max-w-md lg:justify-self-end">
            Hôtellerie, restauration, mode, santé, SaaS. Chaque site est en ligne et utilisé par de vrais clients, au Sénégal, en France et au Canada.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {big.map((p, i) => (
            <Feature key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((p, i) => (
            <Card key={p.id} p={p} i={i} />
          ))}
        </div>

        <div className="reveal mt-16 flex flex-col gap-4 border-t border-line pt-8 lg:flex-row lg:items-center">
          <p className="shrink-0 text-[14px] font-medium text-muted">Et aussi</p>
          <ul className="flex flex-wrap gap-2">
            {others.map((p) => (
              <li key={p.id}>
                <a href={p.url} target="_blank" rel="noopener" className="inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[14px] font-medium shadow-[inset_0_0_0_1px_#E5E7EC] transition-shadow hover:shadow-[inset_0_0_0_1px_#0A0B0F]">
                  {p.name}
                  <ArrowUpRight className="h-3 w-3 text-faint" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
