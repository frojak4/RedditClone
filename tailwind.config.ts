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
        myblack: "#111111",
        mylighterblack: "#141418",
        mutedmidgray: "#3A3A44",
        darkpurp: "#190F40",
        midpurp: "#372773",
        lightpurp: "#7E5EF2",
        lightestpurp: "#7155D9",
        secondarytext: "#B3B3B8",
        contenttext: "#D1D1D6",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
} satisfies Config;
