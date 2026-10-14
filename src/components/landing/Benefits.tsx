import { benefits } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";

const icons = [
  <path key="g" d="M10.5 3a7.5 7.5 0 015.96 12.06l4.24 4.24-1.4 1.4-4.24-4.24A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />,
  <path key="c" d="M7 4h14l-2 9H8.2l.4 2H19v2H7L4.3 6H2V4h3l.5 2H7zm2 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />,
  <path key="s" d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5l8-3zm-1 13.4l6-6-1.4-1.4-4.6 4.6-2.1-2.1L7.5 12l3.5 3.4z" />,
  <path key="w" d="M4 4h16v12H7l-3 3V4zm4 5v2h8V9H8z" />,
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">Pourquoi un site ?</p>
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Vos clients vous cherchent en ligne. <span className="text-blue">Soyez là.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Une page Instagram ne suffit plus. Un vrai site rassure, vend à votre place et transforme les curieux en clients.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {benefits.map((b, i) => (
          <div key={b.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-soft">
              <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-blue">{icons[i]}</svg>
            </span>
            <h3 className="font-display text-xl font-extrabold">{b.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{b.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <WaLink placement="benefits" className="btn-wa">
          <WaIcon />
          Parler de mon projet
        </WaLink>
      </div>
    </section>
  );
}
