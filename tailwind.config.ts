import { generateSafeList } from "./src/lib/utils/tailwindcss.js";
import { colors } from "./src/lib/utils/colors.js";

const theme = {
  colors: {
    ...colors,
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme,
  plugins: [],
  safelist: [...generateSafeList(colors)],
  darkMode: "selector",
};
