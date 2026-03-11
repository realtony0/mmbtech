import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 text-center bg-cream">
      <span className="font-mono text-sm font-bold tracking-[2px] mb-8">
        MMB<span className="text-blue">TECH</span>
      </span>
      <h1 className="font-sans font-extrabold text-[72px] md:text-[120px] leading-none tracking-[-3px] text-ink mb-4">
        404
      </h1>
      <p className="text-muted text-sm md:text-base mb-8 max-w-md">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-blue text-white text-sm font-bold rounded-full hover:bg-ink transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
