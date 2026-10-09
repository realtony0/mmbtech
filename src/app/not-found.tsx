import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
      <p className="label mb-6 text-foam">Profondeur inconnue</p>
      <h1 className="melt font-display text-[34vw] font-bold leading-none tracking-tighter text-white md:text-[20vw]">404</h1>
      <p className="mb-10 mt-4 max-w-md text-ice/75">Cette page s&apos;est perdue en mer, ou n&apos;a jamais existé.</p>
      <Link href="/" className="label rounded-full bg-ice px-8 py-4 text-abyss transition-colors hover:bg-white">
        Remonter à la surface ↑
      </Link>
    </main>
  );
}
