import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      colors: {
        pineGreen: "#127c71",
        vanilla: "#fffff",
        webOrange: "#ffaf35",
        background: "var(--background)",
        foreground: "var(--foreground)",
        filter: {
          "blur-20": "blur(20px)",
          "blur-25": "blur(25px)",
        },
      },
      animation: {
        "pop-blob": "pop-blob 5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
