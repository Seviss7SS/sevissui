import { createThemes } from "tw-colors";
import { colors, generateSafeList } from "./src/lib/utils/tailwindcss.js";

const theme = {
  colors: {
    ...colors,
    primary: colors.blue,
    disabled: colors.gray,
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme,
  plugins: [createThemes({ dark: {} })],
  safelist: [...generateSafeList(theme)],
  darkMode: "selector",
};
