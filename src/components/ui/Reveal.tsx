"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/** Lines of text that slide up from a mask when they enter the viewport. */
export function RevealLines({ lines, className, delay = 0 }: { lines: React.ReactNode[]; className?: string; delay?: number }) {
  return (
    <motion.span className={`block ${className ?? ""}`} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10% 0px" }}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
            transition={{ duration: 1.1, ease, delay: delay + i * 0.08 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function FadeUp({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
