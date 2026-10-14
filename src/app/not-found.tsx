import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
      <Link href="/" className="font-display text-xl font-extrabold">MMB<span className="text-blue">TECH</span></Link>
      <h1 className="mt-8 font-display text-7xl font-extrabold tracking-tight">404</h1>
      <p className="mb-8 mt-3 max-w-md text-lg text-muted">Cette page n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className="btn-blue">Retour à l&apos;accueil</Link>
    </main>
  );
}
