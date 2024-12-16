import { createThemes } from "tw-colors";
import tailwindColors from "tailwindcss/colors.js";
import { sevissui } from "./src/lib/utils/tailwindcss.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      width: {
        sidebar: "14.5rem",
      },
      height: {
        header: "4.875rem",
        progress: {
          xs: "0.25rem",
          sm: "0.375rem",
          md: "0.625rem",
          lg: "1rem",
          xl: "1.5rem",
        },
      },
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
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [
    sevissui,
    createThemes(({ light, dark }) => ({
      test: dark({
        primary: {
          darkest: "#e50d06",
          darker: "#ed4125",
          dark: "#f45f3f",
          DEFAULT: "#ff0000",
          light: "#ff9073",
          lighter: "#ffa78e",
        },
        gray: {
          darkest: "#121212",
          darker: "#282828",
          dark: "#3f3f3f",
          DEFAULT: "#575757",
          light: "#717171",
          lighter: "#8b8b8b",
          lightest: "#a5a5a5",
        },
        disabled: {
          light: "#a5a5a5",
          DEFAULT: "#8b8b8b",
          dark: "#575757",
        },
        error: {
          lightest: tailwindColors.red[50],
          lighter: tailwindColors.red[100],
          light: tailwindColors.red[200],
          DEFAULT: tailwindColors.red[400],
          dark: tailwindColors.red[600],
          darker: tailwindColors.red[700],
          darkest: tailwindColors.red[900],
        },
      }),
      sevissrs: dark({
        primary: {
          darkest: "#e50d06",
          darker: "#ed4125",
          dark: "#f45f3f",
          DEFAULT: "#ff0000",
          light: "#ff9073",
          lighter: "#ffa78e",
        },
        gray: {
          darkest: "#121212",
          darker: "#282828",
          dark: "#3f3f3f",
          DEFAULT: "#575757",
          light: "#717171",
          lighter: "#8b8b8b",
          lightest: "#a5a5a5",
        },
        disabled: {
          light: "#a5a5a5",
          DEFAULT: "#8b8b8b",
          dark: "#575757",
        },
        error: {
          lightest: tailwindColors.red[50],
          lighter: tailwindColors.red[100],
          light: tailwindColors.red[200],
          DEFAULT: tailwindColors.red[400],
          dark: tailwindColors.red[600],
          darker: tailwindColors.red[700],
          darkest: tailwindColors.red[900],
        },
      }),
    })),
  ],
  darkMode: "selector",
};
