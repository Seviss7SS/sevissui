// @ts-nocheck
import tailwindColors from "tailwindcss/colors.js";
import get from "lodash.get";

const colors = {
  ...tailwindColors,
  primary: {
    light: tailwindColors.blue[200],
    base: tailwindColors.blue[700],
    dark: tailwindColors.blue[900],
    contrast: tailwindColors.white,
  },
  disabled: tailwindColors.gray,
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
