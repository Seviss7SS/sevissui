// @ts-nocheck
import tailwindColors from "tailwindcss/colors.js";

const definedColors = {
  primary: {
    darkest: "#e50d06",
    darker: "#ed4125",
    dark: "#f45f3f",
    DEFAULT: "#fa7859",
    light: "#ff9073",
    lighter: "#ffa78e",
    contrast: "#ffffff",
  },
  gray: {
    darkest: "#121212",
    darker: "#282828",
    dark: "#3f3f3f",
    DEFAULT: "#575757",
    light: "#717171",
    lighter: "#8b8b8b",
    lightest: "#a5a5a5",
    contrast: "#ffffff",
  },
  disabled: {
    DEFAULT: "#a5a5a5",
    contrast: "#575757",
  },
};

const colors = {
  ...tailwindColors,
  ...definedColors,
};

export { colors, definedColors };
