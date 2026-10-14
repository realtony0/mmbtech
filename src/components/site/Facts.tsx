const facts = [
  { n: "15", l: "sites et applications en ligne" },
  { n: "3", l: "pays : Sénégal, France, Canada" },
  { n: "24 h", l: "pour recevoir votre devis" },
  { n: "100 %", l: "sur mesure, aucun template" },
];

export function Facts() {
  return (
    <section aria-label="MMBTECH en chiffres" className="border-b border-line">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.l} className="bg-white px-1 py-8 sm:px-0 sm:py-10 lg:px-8 lg:first:pl-0">
              <div className="reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
              <div className="pl-4 text-4xl font-semibold tracking-[-0.04em] tabular-nums sm:text-5xl lg:pl-0">{f.n}</div>
              <div className="mt-2 max-w-[14rem] pl-4 text-[14px] leading-snug text-muted lg:pl-0">{f.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
