import { faq } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">Questions fréquentes</p>
          <h2 className="h2 mt-4">Vous vous posez des questions ?</h2>
          <p className="lead mt-5 max-w-sm">Une autre question ? Écrivez-nous directement sur WhatsApp.</p>
          <WaLink placement="faq" message="Bonjour MMBTECH, j'ai une question :" className="btn-line mt-8">
            <WaIcon className="h-4 w-4 text-wa" />
            Poser ma question
          </WaLink>
        </div>
        <div className="reveal border-t border-line">
          {faq.map((f, i) => (
            <details key={f.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[17px] font-semibold tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-ink transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="-mt-1 max-w-xl pb-6 text-[16px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
