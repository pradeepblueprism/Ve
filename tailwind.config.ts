import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#0A0F1E",
        surface:  "#111827",
        card:     "#1A2238",
        gold: {
          DEFAULT: "#C9A96E",
          light:   "#E2C898",
          dark:    "#A6844A",
        },
        ivory:  "#F8F5EF",
        muted:  "#C8C4BC",
      },
      fontFamily: {
        sans:    ["var(--font-montserrat)", "Montserrat", "Arial", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
      },
      animation: {
        "gradient-shift": "gradientShift 18s ease infinite",
        "float":          "float 5s ease-in-out infinite",
        "pulse-slow":     "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":       { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
