"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

type Ctx = { ready: boolean; setReady: (v: boolean) => void };
const AppCtx = createContext<Ctx>({ ready: false, setReady: () => {} });
export const useApp = () => useContext(AppCtx);

let lenis: Lenis | null = null;

/** Smooth-scroll to an in-page anchor ("#contact") and keep the URL clean. */
/** Freeze page scrolling (e.g. while the fullscreen menu is open). */
export function lockScroll(locked: boolean) {
  if (locked) lenis?.stop();
  else lenis?.start();
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash) as HTMLElement | null;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: hash === "#top" ? 0 : -72, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis?.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Route every in-page anchor click through Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute("href")!;
      if (hash.length < 2) return;
      e.preventDefault();
      scrollToHash(hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    if (!ready) lenis?.stop();
    else lenis?.start();
  }, [ready]);

  return <AppCtx.Provider value={{ ready, setReady }}>{children}</AppCtx.Provider>;
}
