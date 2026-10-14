import { services, benefits } from "@/lib/data";
import { Check } from "./ui";

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <div className="wrap">
        <div className="reveal max-w-2xl">
          <p className="kicker">Services</p>
          <h2 className="h2 mt-4">Tout ce qu&apos;il faut pour vendre en ligne, au même endroit.</h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.title} className="reveal flex flex-col rounded-2xl bg-white p-7 shadow-soft sm:p-9" style={{ ["--d" as string]: `${(i % 2) * 80}ms` }}>
              <h3 className="text-2xl font-semibold sm:text-[28px]">{s.title}</h3>
              <p className="mb-8 mt-3 max-w-md text-[16px] leading-relaxed text-muted">{s.desc}</p>
              <ul className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-6 text-[14.5px] font-medium">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <Check />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* What a client gets */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Un site n&apos;est pas une carte de visite. <span className="text-faint">C&apos;est votre meilleur vendeur.</span>
            </h3>
            <p className="lead mt-5 max-w-md">Une page Instagram ne suffit plus. Vos clients comparent, vérifient, puis achètent chez celui qui inspire le plus confiance.</p>
          </div>
          <dl className="reveal grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-6 sm:p-7">
                <dt className="font-semibold tracking-[-0.02em]">{b.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-muted">{b.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
