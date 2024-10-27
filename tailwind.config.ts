import colors from "tailwindcss/colors.js";

import { generateSafeList } from "./src/lib/utils/tailwindcss.js";

const theme = {
  extend: {
    colors: {
      ...colors,
      primary: colors.blue,
      disabled: colors.gray,
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme,
  plugins: [],
  safelist: [...generateSafeList(theme)],
};
