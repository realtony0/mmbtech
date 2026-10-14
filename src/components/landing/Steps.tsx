import { steps } from "@/lib/data";

export function Steps() {
  return (
    <section id="methode" className="bg-ink py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-sun">Comment ça marche</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">De votre message à votre site en ligne</h2>
          <p className="mt-4 text-lg text-white/70">On s&apos;occupe de tout. Vous validez à chaque étape.</p>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-sun text-lg font-extrabold text-ink">{i + 1}</span>
              <h3 className="mt-5 font-display text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
