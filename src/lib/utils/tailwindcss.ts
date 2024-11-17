// @ts-nocheck
import tailwindColors from "tailwindcss/colors.js";
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function bestContrast(hexColor) {
  try {
    // Convert hex to RGB
    const rgb = hexToRgb(hexColor);

    // Calculate luminance
    const luminance = calculateLuminance(rgb);

    // Calculate contrast ratios
    const contrastBlack = calculateContrastRatio(luminance, 0);
    const contrastWhite = calculateContrastRatio(luminance, 1);

    // Return better contrast color
    return contrastBlack > contrastWhite ? "#000000" : "#ffffff";
  } catch (err) {
    return "#000000";
  }
}

// Helper functions
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : null;
}

function calculateLuminance(rgb) {
  const R = rgb.r * 0.2126;
  const G = rgb.g * 0.7152;
  const B = rgb.b * 0.0722;
  return R + G + B;
}

function calculateContrastRatio(L1, L2) {
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

function extractColor(color, opacity) {
  // TODO: string color to support opacity (will require a hex map)
  return typeof color === "string" ? color : color({ opacityValue: opacity });
}

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
      borderRadius: theme("borderRadius.DEFAULT"),

      "&:disabled": {
        cursor: "default",
        backgroundColor: "theme(colors.disabled)",
        color: "theme(colors.disabled.contrast)",
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
      "btn-filled": (_color) => {
        const color = extractColor(_color);
        return {
          backgroundColor: color,
          color: bestContrast(color),
        };
      },
      "btn-outlined": (_color) => {
        const color = extractColor(_color);
        return {
          borderColor: color,
          borderWidth: "1px",
          borderStyle: "solid",
        };
      },
      "btn-text": (_color) => {
        const color = extractColor(_color);
        return {
          color: color,
          "&:disabled": {
            backgroundColor: "transparent",
          },
        };
      },
      "btn-subtle": (_color) => {
        const color = extractColor(_color);
        const colorBg = extractColor(_color, 0.25);
        return {
          color: color,
          "&:hover": {
            backgroundColor: colorBg,
          },
          "&:disabled": {
            backgroundColor: "transparent",
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
      borderRadius: theme("borderRadius.DEFAULT"),
      overflow: "hidden",
      backgroundColor: "white",
      position: "relative",
      padding: theme("spacing.xl"),
      "&.clickable": {
        cursor: "pointer",
      },
    },
  });

  // input
  addComponents({
    ".input-field": {
      "& .input-group": {
        borderWidth: "1px",
        borderStyle: "solid",
      },
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        borderRadius: theme("borderRadius.DEFAULT"),
        display: "block",
        width: "100%",
        padding: theme("spacing.md"),
      },
      "& label": {
        display: "block",
        marginBottom: theme("spacing.sm"),
        fontWeight: "500",
        lineHeight: "100%",
      },
    },
  });

  matchUtilities(
    {
      input: (_color) => {
        const color = extractColor(_color);
        return {
          "& .input-group": {
            backgroundColor: "white",
            color: "black",
            "--tw-ring-color": color,
          },
          "& .input-group:focus-within": {
            borderColor: color,
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

  // textarea
  addComponents({
    ".textarea-field": {
      "& > textarea": {
        display: "block",
        padding: theme("spacing.sm"),
        width: "100%",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        backgroundColor: "white",
        borderRadius: theme("borderRadius.DEFAULT"),
        borderWidth: "1px",
        borderColor: theme("colors.gray.light"),
      },
    },
  });

  matchUtilities(
    {
      textarea: (_color) => {
        const color = extractColor(_color);
        return {
          backgroundColor: "white",
          color: "black",
          borderColor: color,
          "--tw-ring-color": color,
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

  // progress
  addComponents({
    ".progress": {
      width: "100%",
      borderRadius: "9999px",
    },
    ".progress-xs": {
      height: theme("height.progress.xs"),
      "& .progress-fill": {
        height: theme("height.progress.xs"),
      },
    },
    ".progress-sm": {
      height: theme("height.progress.sm"),
      "& .progress-fill": {
        height: theme("height.progress.sm"),
      },
    },
    ".progress-md": {
      height: theme("height.progress.md"),
      "& .progress-fill": {
        height: theme("height.progress.md"),
      },
    },
    ".progress-lg": {
      height: theme("height.progress.lg"),
      "& .progress-fill": {
        height: theme("height.progress.lg"),
      },
    },
    ".progress-xl": {
      height: theme("height.progress.xl"),
      "& .progress-fill": {
        height: theme("height.progress.xl"),
      },
    },
  });

  matchUtilities(
    {
      progress: (_color) => {
        const color = extractColor(_color);
        return {
          "& .progress-fill": {
            backgroundColor: color,
          },
          color: bestContrast(color),
        };
      },
      "progress-bg": (_color) => {
        const color = extractColor(_color);
        return {
          backgroundColor: color,
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

export { sevissui };
