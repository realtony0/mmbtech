import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "https://mmb-tech.com/mentions-legales" },
};

const blocks: [string, React.ReactNode][] = [
  ["Éditeur", <>MMBTECH — studio digital basé à Dakar, Sénégal.<br />Email : {contact.email}<br />Téléphone : {contact.phone}</>],
  ["Hébergement", <>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com</>],
  ["Propriété intellectuelle", <>Les contenus de ce site (textes, visuels, logo) sont la propriété de MMBTECH. Les captures de projets sont présentées avec l&apos;accord de nos clients et restent la propriété de leurs marques respectives.</>],
  ["Données personnelles", <>Le formulaire de contact ne stocke aucune donnée sur nos serveurs : il ouvre simplement une conversation WhatsApp avec votre message. Si une mesure d&apos;audience est activée, elle sert uniquement à des statistiques anonymes de fréquentation.</>],
];

export default function Legal() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-28 md:py-36">
      <Link href="/" className="label text-foam hover:text-white">← Retour</Link>
      <h1 className="mb-14 mt-8 font-display text-5xl font-bold uppercase tracking-tight text-white md:text-7xl">Mentions légales</h1>
      <div className="glass divide-y divide-ice/10 rounded-md">
        {blocks.map(([t, b]) => (
          <section key={t} className="p-6 md:p-8">
            <h2 className="label mb-3 text-foam">{t}</h2>
            <p className="leading-relaxed text-ice/80">{b}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
