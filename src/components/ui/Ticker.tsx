const items = ["SITES WEB","APPS MOBILES","BOUTIQUES EN LIGNE","DESIGN","IDENTITÉ VISUELLE","DAKAR","SÉNÉGAL"];

export function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-blue py-3.5">
      <div className="flex gap-14 animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-[3px] text-white/88 shrink-0">
            {item}
            {i < doubled.length - 1 && <span className="ml-14 text-white/25">◆</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
