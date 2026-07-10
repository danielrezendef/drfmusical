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
        ivory: "#fbf7ef",
        cream: "#f2eadb",
        champagne: "#e5d1a3",
        gold: "#b9934f",
        espresso: "#2b2018",
        umber: "#5d4633"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(185, 147, 79, 0.18)",
        soft: "0 18px 48px rgba(43, 32, 24, 0.12)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
};

export default config;
