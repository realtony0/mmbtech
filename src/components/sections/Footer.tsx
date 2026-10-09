import Link from "next/link";
import { contact, navLinks } from "@/lib/data";
import { Clock } from "@/components/ui/Clock";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 pb-6 pt-20 md:px-8">
      <div className="grid gap-10 border-t border-ice/20 pt-8 md:grid-cols-4">
        <div className="label text-ice/60">
          MMBTECH — Studio digital
          <br />
          Dakar, Sénégal · <Clock /> GMT
        </div>
        <ul className="label space-y-2">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="text-ice/80 hover:text-white">{l.label}</a></li>
          ))}
        </ul>
        <ul className="label space-y-2">
          <li><a href={contact.instagram} target="_blank" rel="noreferrer" className="text-ice/80 hover:text-white">Instagram ↗</a></li>
          <li><a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-ice/80 hover:text-white">LinkedIn ↗</a></li>
          <li><a href={`mailto:${contact.email}`} className="text-ice/80 hover:text-white">{contact.email}</a></li>
        </ul>
        <div className="label flex flex-col gap-2 md:items-end">
          <a href="#top" className="text-ice/80 hover:text-white">Remonter ↑</a>
          <Link href="/mentions-legales" className="text-ice/50 hover:text-white">Mentions légales</Link>
          <span className="text-ice/40">© {new Date().getFullYear()} MMBTECH</span>
        </div>
      </div>
      <div
        aria-hidden
        className="melt pointer-events-none mt-10 select-none text-center font-display font-bold uppercase leading-[0.75] tracking-[-0.05em] text-ice/90"
        style={{ fontSize: "clamp(60px, 21vw, 380px)" }}
      >
        mmbtech
      </div>
    </footer>
  );
}
