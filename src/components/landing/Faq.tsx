import { faq } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="eyebrow mb-3 text-center">Questions fréquentes</p>
      <h2 className="text-center font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Vous vous demandez…</h2>
      <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
        {faq.map((f, i) => (
          <details key={f.q} className="group p-5 sm:p-6" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-extrabold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-soft text-xl text-blue transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
