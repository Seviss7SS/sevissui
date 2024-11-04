import { sevissui } from "./src/lib/utils/tailwindcss.js";
import { colors } from "./src/lib/utils/colors.js";

const theme = {
  colors: {
    ...colors,
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    ...theme,
    extend: {
      spacing: {
        /** 4px */
        xs: "0.25rem",
        /** 8px */
        sm: "0.5rem",
        /** 12px */
        md: "0.75rem",
        /** 16px */
        lg: "1rem",
        /** 24px */
        xl: "1.5rem",
      },
    },
  },
  plugins: [sevissui],
  darkMode: "selector",
};
