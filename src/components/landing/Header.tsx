import { WaIcon, WaLink } from "@/components/WaLink";

export function TopBar() {
  return (
    <div className="bg-ink px-4 py-2 text-center text-[12px] font-semibold text-white sm:text-[13px]">
      Devis gratuit sous 24h <span className="mx-1.5 text-sun">•</span> Paiement en plusieurs fois<span className="hidden sm:inline"> possible</span>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">
          MMB<span className="text-blue">TECH</span>
        </a>
        <nav aria-label="Navigation" className="hidden items-center gap-7 text-[15px] font-semibold text-muted md:flex">
          <a href="#realisations" className="hover:text-ink">Réalisations</a>
          <a href="#offres" className="hover:text-ink">Offres</a>
          <a href="#methode" className="hover:text-ink">Comment ça marche</a>
          <a href="#faq" className="hover:text-ink">Questions</a>
        </nav>
        <WaLink placement="header" className="btn-wa !px-4 !py-2.5 text-sm">
          <WaIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Devis WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </WaLink>
      </div>
    </header>
  );
}
