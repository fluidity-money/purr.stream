import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        tint: "#6E5BDD",
        tintLight: "#A2A2F2",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;
