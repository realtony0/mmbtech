import Link from "next/link";
import { contact } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";
import { Logo } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-white/60 md:pb-10">
      <div className="wrap">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo invert />
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed">Agence web à Dakar. Sites vitrines, boutiques en ligne et applications sur mesure.</p>
          </div>
          <nav aria-label="Liens de pied de page" className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-[14px] sm:grid-cols-3">
            <a href="#realisations" className="hover:text-white">Réalisations</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#tarifs" className="hover:text-white">Tarifs</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href={contact.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
            <a href={contact.linkedin} target="_blank" rel="noopener" className="hover:text-white">LinkedIn</a>
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
            <WaLink placement="footer" className="hover:text-white">WhatsApp</WaLink>
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
          </nav>
        </div>
        <div aria-hidden className="mt-16 select-none text-[22vw] font-bold leading-[0.75] tracking-[-0.07em] text-white/[0.06] md:text-[17vw]">
          mmbtech
        </div>
        <p className="mt-6 text-[13px] text-white/40">© {new Date().getFullYear()} MMBTECH. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

/** Persistent action bar on phones, where most ad traffic lands. */
export function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/90 px-3 pt-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex gap-2">
        <WaLink placement="sticky" className="btn-primary flex-1">
          <WaIcon className="h-[18px] w-[18px]" />
          Devis gratuit
        </WaLink>
        <a href={`tel:+${contact.phoneRaw}`} className="btn-line !w-12 !px-0" aria-label={`Appeler le ${contact.phone}`}>
          <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-current">
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
