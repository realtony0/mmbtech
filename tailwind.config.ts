import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        "cream-dark": "#EDE7D9",
        ink: "#0A0A0F",
        blue: "#0047FF",
        "blue-light": "#3D6FFF",
        "blue-pale": "#EEF2FF",
        muted: "#8A8A99",
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        serif: ["var(--font-dm-serif)", "serif"],
      },
      animation: {
        ticker: "ticker 22s linear infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        "scroll-up": "scrollUp 14s ease-in-out infinite alternate",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-45%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
