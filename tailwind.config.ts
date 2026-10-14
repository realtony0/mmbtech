import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1533",
        blue: { DEFAULT: "#0047FF", deep: "#0033B8", soft: "#E8EEFF" },
        sun: "#FFD43B",
        wa: { DEFAULT: "#1FAF55", dark: "#168A42" },
        mist: "#F3F5FA",
        line: "#DDE3F0",
        muted: "#5A6584",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,21,51,.06), 0 12px 32px -12px rgba(11,21,51,.18)",
        pop: "0 20px 50px -20px rgba(0,71,255,.55)",
      },
    },
  },
  plugins: [],
};
export default config;
