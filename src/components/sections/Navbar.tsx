"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projets" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-[200] h-16 md:h-[72px] flex items-center justify-between px-5 md:px-14 bg-ink/90 backdrop-blur-xl border-b border-white/[0.06]">
        <Link href="/" className="font-mono text-[15px] font-bold tracking-[2px] text-white">
          Am <span className="text-blue">Web Agency</span>
        </Link>

        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden md:inline-flex px-6 py-2.5 bg-accent-gradient text-white text-xs font-semibold rounded-full hover:opacity-90 transition-all shadow-[0_2px_16px_rgba(91,76,255,.3)]">
            Démarrer un projet
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-16 z-[199] bg-ink/98 backdrop-blur-xl flex flex-col px-5 pt-8 pb-10 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-2xl font-bold text-white border-b border-white/[0.06] hover:text-blue transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full py-4 bg-accent-gradient text-white text-center text-sm font-bold rounded-full hover:opacity-90 transition-all shadow-[0_4px_24px_rgba(91,76,255,.3)]"
              >
                Démarrer un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
