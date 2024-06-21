import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SSSRegular", "sans-serif"],
        medium: ["SSSMedium", "sans-serif"],
        bold: ["SSSBold", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
