import colors from "tailwindcss/colors.js";

import { BUTTON } from "./src/lib/config";

console.log(BUTTON);

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
  safelist: [
    {
      pattern: /bg-(primary|disabled)-\d+/,
    },
    {
      pattern: /text-primary-\d+/,
    },
  ],
};
