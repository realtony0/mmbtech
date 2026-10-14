import Image from "next/image";
import { projects } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="realisations" className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Nos réalisations</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {projects.length} sites en ligne. Visitez-les.
            </h2>
            <p className="mt-4 text-lg text-muted">Restaurants, boutiques, mode, santé, SaaS : de vrais projets, de vrais clients, consultables maintenant.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener"
              className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                <Image
                  src={`/projects/${p.id}.webp`}
                  alt={`Site ${p.name}`}
                  fill
                  sizes="(min-width:1024px) 360px, (min-width:640px) 45vw, 92vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold">{p.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-extrabold">{p.name}</h3>
                  <span className="text-[13px] font-semibold text-muted">{p.place}</span>
                </div>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.desc}</p>
                <span className="mt-3 inline-block text-[15px] font-bold text-blue group-hover:underline">Voir le site ↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-white p-5">
          <p className="mb-3 text-[14px] font-bold text-muted">Et aussi</p>
          <ul className="flex flex-wrap gap-2">
            {others.map((p) => (
              <li key={p.id}>
                <a href={p.url} target="_blank" rel="noopener" className="inline-block rounded-full border border-line px-4 py-2 text-[14px] font-semibold hover:border-ink">
                  {p.name} <span className="text-muted">· {p.category}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-xl font-extrabold">Le prochain, c&apos;est le vôtre ?</p>
          <WaLink placement="portfolio" message="Bonjour MMBTECH, j'ai vu vos réalisations, je voudrais un site pour mon activité." className="btn-wa">
            <WaIcon />
            Je veux mon site
          </WaLink>
        </div>
      </div>
    </section>
  );
}
