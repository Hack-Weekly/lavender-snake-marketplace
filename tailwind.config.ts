import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryText: "#040322",
        secondaryText: "#4A4458",
        yellowText: "#FFE5B4",
        "text-grey": "#6D757D",
        geraldineBg: "#F2B8B5",
        cardBg: "#D9D9D9",
        indigoBg: "#121132",
        grey: "#E6E6FA",
      },
      fontFamily: {
        playfairDisplay: ["var(--playfair-display)"],
        poppins: ["var(--poppins)"],
        baskervville: ["var(--baskervville)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
