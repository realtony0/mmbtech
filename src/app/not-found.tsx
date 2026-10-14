import Link from "next/link";
import { Logo } from "@/components/site/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
      <Link href="/" aria-label="Accueil MMBTECH"><Logo /></Link>
      <h1 className="mt-10 text-7xl font-semibold tabular-nums">404</h1>
      <p className="lead mb-9 mt-4 max-w-md">Cette page n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className="btn-dark">Retour à l&apos;accueil</Link>
    </main>
  );
}
