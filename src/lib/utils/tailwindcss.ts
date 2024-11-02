// @ts-nocheck
import tailwindColors from "tailwindcss/colors.js";
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import bestContrast from "get-best-contrast-color";

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
  addComponents({
    ".btn": {
      fontWeight: "600",
      "&:disabled": {
        cursor: "default",
      },
      "&:outlined": {
        borderWidth: "1px",
        borderStyle: "solid",
      },
      "&:subtle": {
        backgroundColor: "transparent",
      },
      "&:text": {
        backgroundColor: "transparent",
      },
      "&:filled": {
        "&:disabled": {
          backgroundColor: "theme(colors.disabled.light)",
          color: "theme(colors.disabled.dark)",
        },
      },
    },
  });

  matchUtilities(
    {
      btn: (color) => {
        return {
          backgroundColor: color,
          color: bestContrast(color, ["#fff", "#000"]),
        };
      },
    },
    {
      values: {
        ...flattenColorPalette(theme("colors")),
      },
      type: "color",
    }
  );

  matchUtilities(
    {
      "btn-outlined": (color) => {
        console.log(color);
        return {
          borderColor: color,
          borderWidth: "1px",
          borderStyle: "solid",
        };
      },
    },
    {
      values: {
        ...flattenColorPalette(theme("colors")),
      },
      type: "color",
    }
  );
});

export { generateSafeList, sevissui };
