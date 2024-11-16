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
    contrast: tailwindColors.white,
  },
  gray: {
    darkest: "#121212",
    darker: "#282828",
    dark: "#3f3f3f",
    DEFAULT: "#575757",
    light: "#717171",
    lighter: "#8b8b8b",
    lightest: "#a5a5a5",
    contrast: tailwindColors.white,
  },
  disabled: {
    light: tailwindColors.gray[100],
    DEFAULT: tailwindColors.gray[200],
    dark: tailwindColors.gray[400],
    contrast: tailwindColors.gray[400],
  },
};

const colors = {
  ...tailwindColors,
  ...definedColors,
};

export { colors, definedColors };
