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
  // button
  addComponents({
    ".btn": {
      fontWeight: "600",
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      borderRadius: "0.5rem",

      "&:disabled": {
        cursor: "default",
      },
      "&:disabled": {
        backgroundColor: "theme(colors.disabled.light)",
        color: "theme(colors.disabled.dark)",
      },
    },
    ".btn-xs": {
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
    ".btn-sm": {
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    ".btn-lg": {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    ".btn-xl": {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      paddingTop: "0.875rem",
      paddingBottom: "0.875rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
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
      "btn-filled": (color) => {
        return {
          backgroundColor: color,
          color: bestContrast(color, ["#fff", "#000"]),
        };
      },
      "btn-outlined": (color) => {
        return {
          borderColor: color,
          borderWidth: "1px",
          borderStyle: "solid",
          color: color,
        };
      },
      "btn-text": (color) => {
        return {
          color: color,
        };
      },
      "btn-subtle": (color) => {
        return {
          color: color,
          "&:hover": {
            backgroundColor: `${color}40`,
          },
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

  // card
  addComponents({
    ".card": {
      display: "block",
      borderRadius: theme("borderRadius.lg"),
      overflow: "hidden",
      backgroundColor: "white",
      position: "relative",
      "&.clickable": {
        cursor: "pointer",
      },
    },
    ".card-dark": {
      backgroundColor: theme("colors.gray.dark"),
      borderColor: theme("colors.gray.base"),
      borderWidth: "1px",
      borderStyle: "solid",
      color: theme("colors.gray.contrast"),
    },
  });
});

export { generateSafeList, sevissui };
