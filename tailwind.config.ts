import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.blue,
        disabled: colors.gray,
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-primary-\d+/,
    },
    {
      pattern: /text-primary-\d+/,
    },
  ],
};
