import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myblack: "#0B0B0D",
        mylighterblack: "#141418",
        mutedmidgray: "#3A3A44",
        darkpurp: "#190F40",
        midpurp: "#372773",
        lightpurp: "#7E5EF2",
        lightestpurp: "#7155D9"
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
} satisfies Config;
