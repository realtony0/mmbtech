import { steps } from "@/lib/data";

export function Process() {
  return (
    <section id="methode" className="py-20 sm:py-28">
      <div className="wrap">
        <div className="reveal grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="kicker">Méthode</p>
            <h2 className="h2 mt-4">Simple, du premier message à la mise en ligne.</h2>
          </div>
          <p className="lead max-w-md lg:justify-self-end">Vous validez chaque étape. Vous savez toujours où en est votre projet, et combien il coûte.</p>
        </div>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal relative border-t border-line pt-6" style={{ ["--d" as string]: `${i * 90}ms` }}>
              <span aria-hidden className="absolute -top-px left-0 h-px w-16 bg-blue" />
              <span className="text-[13px] font-semibold tabular-nums text-blue">Étape {i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
