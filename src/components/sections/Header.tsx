"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, contact, whatsappLink } from "@/lib/data";
import { Clock } from "@/components/ui/Clock";

const ease = [0.76, 0, 0.24, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[300] flex items-center justify-between bg-gradient-to-b from-abyss/80 via-abyss/40 to-transparent px-5 pb-8 pt-4 md:px-8 md:pb-10 md:pt-6">
        <a href="#top" data-cursor="Accueil" className="font-display text-lg font-bold tracking-tight text-white md:text-xl">
          MMBTECH<sup className="ml-0.5 align-super text-[9px] font-medium">©</sup>
        </a>
        <div className="label hidden items-center gap-3 text-white/80 lg:flex">
          <span>Dakar</span>
          <span className="h-px w-6 bg-white/40" />
          <Clock />
          <span className="h-px w-6 bg-white/40" />
          <span>Disponible pour nouveaux projets</span>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu"
          data-cursor={open ? "Fermer" : "Menu"}
          className="label group flex items-center gap-3 text-white"
        >
          <span>{open ? "Fermer" : "Menu"}</span>
          <span className="relative flex h-3 w-6 flex-col justify-between">
            <span className={`h-px w-full bg-white transition-transform duration-500 ease-expo ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-white transition-transform duration-500 ease-expo ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu"
            aria-label="Menu principal"
            className="fixed inset-0 z-[250] flex flex-col justify-between bg-abyss/80 px-5 pb-8 pt-24 backdrop-blur-2xl md:px-8 md:pb-10"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.9, ease }}
          >
            <ul>
              {navLinks.map((l, i) => (
                <li key={l.href} className="overflow-hidden border-b border-ice/10">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    data-cursor="Plonger"
                    className="group flex items-baseline gap-4 py-2 md:gap-8 md:py-3"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.25 + i * 0.06 }}
                  >
                    <span className="label w-10 text-foam">0{i + 1}</span>
                    <span className="font-display text-[13vw] font-bold uppercase leading-none tracking-tight text-ice transition-transform duration-700 ease-expo group-hover:translate-x-6 md:text-[7.5vw]">
                      {l.label}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              className="label flex flex-col gap-3 text-ice/70 md:flex-row md:justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href={`mailto:${contact.email}`} className="hover:text-ice">{contact.email}</a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-ice">WhatsApp {contact.phone}</a>
              <span>Dakar, Sénégal</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
