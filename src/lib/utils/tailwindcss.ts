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
      btn: (value) => {
        const variants = theme("components.btn.variants");

        console.log(value);

        if (variants[value]) {
          if (value === "outlined") {
            return {
              border: "1px solid",
              backgroundColor: "transparent",
            };
          }
        }

        console.log(variants);

        return {
          backgroundColor: value,
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
      btn: (value) => {
        const variants = theme("components.btn.variants");

        console.log(value);

        if (variants[value]) {
          if (value === "outlined") {
            return {
              border: "1px solid",
              backgroundColor: "transparent",
            };
          }
        }

        console.log(variants);

        return {
          backgroundColor: value,
        };
      },
    },
    {
      values: {
        ...theme("components.btn.variants"),
      },
      type: "genericName",
    }
  );
});

export { generateSafeList, sevissui };
