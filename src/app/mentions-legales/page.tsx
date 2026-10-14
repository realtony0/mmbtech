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
  ["Données personnelles", <>Le formulaire de contact ne stocke aucune donnée sur nos serveurs : il ouvre simplement une conversation WhatsApp avec votre message. Ce site peut utiliser le pixel Meta et Google Analytics pour mesurer l&apos;efficacité de nos publicités et la fréquentation du site.</>],
];

export default function Legal() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <Link href="/" className="font-semibold text-blue hover:underline">← Retour à l&apos;accueil</Link>
      <h1 className="mb-10 mt-6 font-display text-4xl font-extrabold tracking-tight md:text-6xl">Mentions légales</h1>
      <div className="divide-y divide-line rounded-2xl border border-line">
        {blocks.map(([t, b]) => (
          <section key={t} className="p-6 md:p-8">
            <h2 className="mb-2 font-display text-lg font-extrabold">{t}</h2>
            <p className="leading-relaxed text-muted">{b}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
