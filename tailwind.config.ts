import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0A0B0F", soft: "#16181F" },
        blue: { DEFAULT: "#0047FF", deep: "#0036C4", tint: "#EEF2FF" },
        paper: "#F5F6F8",
        line: "#E5E7EC",
        muted: "#5C6170",
        faint: "#8C91A0",
        wa: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { site: "76rem" },
      boxShadow: {
        frame: "0 0 0 1px rgba(10,11,15,.06), 0 2px 4px rgba(10,11,15,.04), 0 24px 48px -16px rgba(10,11,15,.22)",
        soft: "0 0 0 1px rgba(10,11,15,.05), 0 12px 32px -18px rgba(10,11,15,.25)",
        cta: "0 1px 0 rgba(255,255,255,.25) inset, 0 10px 24px -10px rgba(0,71,255,.7)",
      },
      keyframes: {
        up: { to: { transform: "translateY(-50%)" } },
        down: { from: { transform: "translateY(-50%)" }, to: { transform: "translateY(0)" } },
        left: { to: { transform: "translateX(-50%)" } },
      },
      animation: {
        up: "up 60s linear infinite",
        down: "down 60s linear infinite",
        left: "left 50s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
