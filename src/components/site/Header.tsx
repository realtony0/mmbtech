import { WaLink } from "@/components/WaLink";
import { Arrow, Logo } from "./ui";

const nav = [
  ["#realisations", "Réalisations"],
  ["#services", "Services"],
  ["#tarifs", "Tarifs"],
  ["#faq", "FAQ"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label="MMBTECH, retour en haut">
          <Logo />
        </a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 text-[14.5px] font-medium text-muted lg:flex">
          {nav.map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden h-10 items-center rounded-full px-4 text-[14.5px] font-medium text-muted transition-colors hover:text-ink sm:inline-flex">
            Contact
          </a>
          <WaLink placement="header" className="btn-dark !h-10 !px-4 text-[14px]">
            Demander un devis
            <Arrow className="h-3.5 w-3.5" />
          </WaLink>
        </div>
      </div>
    </header>
  );
}
