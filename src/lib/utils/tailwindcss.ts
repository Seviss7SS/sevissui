// @ts-nocheck
import tailwindColors from "tailwindcss/colors.js";
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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

const sevissui = plugin(function ({
  matchUtilities,
  addComponents,
  e,
  config,
  theme,
}) {
  // Add your custom styles here
  matchUtilities(
    {
      btn: (value) => ({
        backgroundColor: console.log(value) || value,
      }),
    },
    { values: flattenColorPalette(theme("colors")), type: "color" }
  );
});

export { generateSafeList, sevissui };
