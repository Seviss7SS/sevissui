// @ts-nocheck
import tailwindColors from "tailwindcss/colors.js";

const colors = {
  ...tailwindColors,
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

const generateSafeList = (themeColors) => {
  const colorNames = Object.keys(themeColors);

  const safelist = [
    {
      pattern: new RegExp(
        `bg-(${colorNames.join("|")})-(light|dark|base|contrast)`
      ),
      variants: ["hover", "active"],
    },
    {
      pattern: new RegExp(
        `text-(${colorNames.join("|")})-(light|dark|base|contrast)`
      ),
      variants: ["hover", "active"],
    },
    {
      pattern: new RegExp(
        `border-(${colorNames.join("|")})-(light|dark|base|contrast)`
      ),
      variants: ["hover", "active"],
    },
  ];

  return safelist;
};

export { generateSafeList, colors };
