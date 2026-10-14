import Link from "next/link";
import { contact } from "@/lib/data";
import { WaIcon, WaLink } from "@/components/WaLink";

export function FinalCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 md:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue px-6 py-12 text-center text-white sm:px-12 md:py-16">
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Prêt à avoir votre site ?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">Un message suffit. On vous répond avec un devis clair sous 24h.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WaLink placement="final" className="btn bg-white text-base text-ink hover:bg-sun">
            <WaIcon className="h-5 w-5 text-wa" />
            Écrire sur WhatsApp
          </WaLink>
          <a href="#devis" className="btn border-2 border-white/40 text-base text-white hover:border-white">Remplir le formulaire</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-28 pt-10 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-[15px] sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-xl font-extrabold">MMB<span className="text-blue">TECH</span></div>
          <p className="mt-1 text-muted">Agence web à Dakar, Sénégal</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
          <WaLink placement="footer" className="hover:text-blue">WhatsApp</WaLink>
          <a href={`mailto:${contact.email}`} className="hover:text-blue">{contact.email}</a>
          <a href={contact.instagram} target="_blank" rel="noopener" className="hover:text-blue">Instagram</a>
          <a href={contact.linkedin} target="_blank" rel="noopener" className="hover:text-blue">LinkedIn</a>
          <Link href="/mentions-legales" className="text-muted hover:text-blue">Mentions légales</Link>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-[13px] text-muted sm:px-6">© {new Date().getFullYear()} MMBTECH. Tous droits réservés.</p>
    </footer>
  );
}

/** Always-visible action bar on phones (where most ad traffic lands). */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-3 pt-3 backdrop-blur-md md:hidden" style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}>
      <div className="flex gap-2">
        <WaLink placement="sticky" className="btn-wa flex-1 !py-3.5">
          <WaIcon />
          Devis gratuit
        </WaLink>
        <a href={`tel:+${contact.phoneRaw}`} className="btn-ghost !px-5 !py-3.5" aria-label={`Appeler le ${contact.phone}`}>
          <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" /></svg>
          Appeler
        </a>
      </div>
    </div>
  );
}
