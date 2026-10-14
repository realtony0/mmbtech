import { projects } from "@/lib/data";

/** Scrolling band with the names of real client projects. */
export function ProofStrip() {
  const names = projects.map((p) => p.name);
  const loop = [...names, ...names];
  return (
    <div className="border-y border-line bg-white py-5">
      <p className="mb-3 text-center text-[13px] font-semibold text-muted">Ils nous ont confié leur site</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="marquee flex w-max gap-10 whitespace-nowrap">
          {loop.map((n, i) => (
            <li key={i} aria-hidden={i >= names.length} className="font-display text-xl font-extrabold text-ink/35">
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
