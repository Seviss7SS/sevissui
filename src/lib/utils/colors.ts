// @ts-nocheck
import tailwindColors from "tailwindcss/colors.js";

const definedColors = {
  primary: {
    light: tailwindColors.blue[200],
    base: tailwindColors.blue[700],
    dark: tailwindColors.blue[900],
    contrast: tailwindColors.white,
  },
  gray: {
    ...tailwindColors.gray,
    light: tailwindColors.gray[200],
    base: tailwindColors.gray[700],
    dark: tailwindColors.gray[900],
    contrast: tailwindColors.white,
  },
  disabled: {
    light: tailwindColors.gray[100],
    base: tailwindColors.gray[200],
    dark: tailwindColors.gray[400],
    contrast: tailwindColors.gray[400],
  },
};

const colors = {
  ...tailwindColors,
  ...definedColors,
};

export { colors, definedColors };
