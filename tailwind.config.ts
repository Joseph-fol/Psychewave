import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FAF8FF", // Primary Background
        },
        accent: {
          DEFAULT: "#40FFA6", // Primary Accent
        },
        brand: {
          purple: "#634FED",
          blue: "#3BA1FE",
        },
        dark: {
          DEFAULT: "#09081D", // Primary Dark
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"], // Use the Outfit font variable
      },
      fontSize: {
        "display-headline": ["210px", { lineHeight: "200px", fontWeight: "700" }],
        h1: ["70px", { lineHeight: "84px", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "48px", fontWeight: "700" }],
        "sub-header": ["30px", { lineHeight: "36px", fontWeight: "700" }],
        body: ["18px", { lineHeight: "22px", fontWeight: "700" }],
      },
      borderRadius: {
        "4xl": "2rem", // Large rounded corners
      },
      keyframes: {
        "gradient-anim": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-anim": "gradient-anim 15s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;