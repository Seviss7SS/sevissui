import { createThemes } from "tw-colors";
import { colors, generateSafeList } from "./src/lib/utils/tailwindcss.js";

const theme = {
  colors: {
    ...colors,
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme,
  plugins: [createThemes({ dark: {} })],
  safelist: [...generateSafeList(colors)],
  darkMode: "selector",
};
