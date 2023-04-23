import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryText: "#040322",
        secondaryText: "#4A4458",

      },
      fontFamily: {
        playfairDisplay: ["var(--playfair-display)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
