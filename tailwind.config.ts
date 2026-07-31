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
        cream: "#F4F4F8",
        "cream-dark": "#E8E8EF",
        ink: "#0A0A0F",
        blue: "#5B4CFF",
        "blue-light": "#7B6FFF",
        "blue-pale": "#EEEDFF",
        muted: "#7C7C8A",
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
