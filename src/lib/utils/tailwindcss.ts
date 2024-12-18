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

function decimalToHex(decimal) {
  return decimal.toString(16);
}

function calculateContrastRatio(L1, L2) {
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

function extractColor(color, opacity = 1) {
  const opacityHex = decimalToHex(Math.ceil(opacity * 255));

  return typeof color === "string"
    ? `${color}${opacityHex}`
    : color({ opacityValue: opacity });
}

const sevissui = plugin(function ({
  matchUtilities,
  addComponents,
  e,
  config,
  theme: _theme,
}) {
  function theme(color) {
    if (_theme(color)) return _theme(color);

    const [c, ...rest] = color.split(".");

    return _theme(`${c}.${rest.join("-")}`);
  }

  // box
  addComponents({
    ".box": {
      "&.clickable": {
        cursor: "pointer",

        "&:hover:not([disabled])": {
          opacity: 0.75,
        },
        "&:active:not([disabled])": {
          opacity: 0.5,
        },
      },
    },
  });

  // button
  addComponents({
    ".btn": {
      fontWeight: "600",
      borderRadius: theme("borderRadius.DEFAULT"),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
      overflow: "hidden",
      textAlign: "center",

      "&:not(.clickable)": {
        pointerEvents: "none",
      },

      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        filter:
          "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
      },

      "&:disabled": {
        cursor: "default",
        backgroundColor: theme("colors.disabled"),
        color: theme("colors.disabled.contrast"),
      },

      "&.btn-circle": {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
        paddingTop: "0px !important",
        paddingBottom: "0px !important",
        borderRadius: "9999px !important",
      },
    },
    ".btn-xs": {
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "&.btn-circle": {
        height: "1.5rem",
        width: "1.5rem",
      },
    },
    ".btn-sm": {
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "&.btn-circle": {
        height: "2.5rem",
        width: "2.5rem",
      },
    },
    ".btn-md": {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "&.btn-circle": {
        height: "3.5rem",
        width: "3.5rem",
      },
    },
    ".btn-lg": {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      "&.btn-circle": {
        height: "4.5rem",
        width: "4.5rem",
      },
    },
    ".btn-xl": {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      paddingTop: "0.875rem",
      paddingBottom: "0.875rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      "&.btn-circle": {
        height: "5.5rem",
        width: "5.5rem",
      },
    },
    ".btn-filled": {
      backgroundColor: "var(--sevissui-btn-color)",
      color: "var(--sevissui-btn-text)",
    },
    ".btn-outlined": {
      borderColor: "var(--sevissui-btn-color)",
      color: "var(--sevissui-btn-color)",
      borderWidth: "1px",
      borderStyle: "solid",
    },
    ".btn-text": {
      color: "var(--sevissui-btn-color)",
      "&:disabled": {
        backgroundColor: "transparent",
      },
    },
    ".btn-subtle": {
      color: "var(--sevissui-btn-color)",
      "&:hover": {
        backgroundColor: "var(--sevissui-btn-color-25)",
      },
      "&:disabled": {
        backgroundColor: "transparent",
      },
    },
  });

  matchUtilities(
    {
      btn: (_color) => {
        const color = extractColor(_color);
        const color25 = extractColor(_color, 0.25);
        const colorText = bestContrast(color);
        return {
          "--sevissui-btn-color": color,
          "--sevissui-btn-color-25": color25,
          "--sevissui-btn-text": colorText,
        };
      },
    },
    {
      values: {
        ...flattenColorPalette(_theme("colors")),
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
    ".card-dark": {
      backgroundColor: theme("colors.gray.darker"),
      borderStyle: "none",
      color: theme("colors.white"),
    },
  });

  // input
  addComponents({
    ".input-field": {
      "& .input-group": {
        borderWidth: "1px",
        borderStyle: "solid",
        backgroundColor: theme("colors.white"),
        overflow: "hidden",
      },
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        borderRadius: theme("borderRadius.DEFAULT"),
        display: "block",
        width: "100%",
        padding: theme("spacing.md"),
        backgroundColor: "transparent",
      },
      "& label": {
        display: "block",
        marginBottom: theme("spacing.sm"),
        fontWeight: "500",
        lineHeight: "100%",
      },
      "&.input-field-error": {
        "& .input-group": {
          borderColor: theme("colors.error"),
          color: theme("colors.error"),
        },
      },
    },
    ".input-field-dark": {
      "& .input-group": {
        backgroundColor: theme("colors.gray.darker"),
        color: theme("colors.white"),
        borderColor: theme("colors.gray.dark"),
      },
    },
  });

  matchUtilities(
    {
      input: (_color) => {
        const color = extractColor(_color);
        return {
          "& .input-group": {
            backgroundColor: theme("colors.white"),
            color: theme("colors.black"),
            "--tw-ring-color": color,
          },
          "& .input-group-dark": {
            backgroundColor: theme("colors.gray.darker"),
            color: theme("colors.white"),
            "--tw-ring-color": color,
          },
          "&.input-field-error": {
            "& .input-group": {
              "--tw-ring-color": theme("colors.error"),
            },
            "& .input-group-dark": {
              "--tw-ring-color": theme("colors.error"),
            },
          },
          "& .input-group:focus-within": {
            borderColor: color,
          },
          "& .input-field-error": {
            "& .input-group:focus-within": {
              borderColor: theme("colors.error"),
            },
          },
        };
      },
      "input-filled": (_colors) => {
        const bgColor = extractColor(_colors, 0.25);
        const color = extractColor(_colors);
        return {
          "& .input-group": {
            backgroundColor: `${bgColor} !important`,
            color: `${color} !important`,
            borderColor: `${color} !important`,
            "--tw-ring-color": `${color} !important`,
          },
        };
      },
    },
    {
      values: {
        ...flattenColorPalette(_theme("colors")),
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
          "&:focus": {
            borderColor: color,
            "--tw-ring-color": color,
          },
        };
      },
    },
    {
      values: {
        ...flattenColorPalette(_theme("colors")),
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
        ...flattenColorPalette(_theme("colors")),
      },
      type: "color",
    }
  );

  // switch
  addComponents({
    ".switch-toggle": {
      position: "relative",
      backgroundColor: theme("colors.gray.lightest"),
      borderRadius: "9999px",
      "&.peer": {
        "&:focus ~ &": {
          outline: "2px solid transparent",
          outlineOffset: "2px",
        },
      },
      "&::after": {
        backgroundColor: "white",
        borderStyle: "none",
        borderContent: "",
        position: "absolute",
        borderRadius: "9999px",
        top: "2px",
        insetInlineStart: "2px",
        height: "1.25rem",
        width: "1.25rem",
      },
    },
  });

  matchUtilities(
    {
      switch: (_color) => {
        const color = extractColor(_color);
        return {
          "& .peer:enabled:checked ~ .switch-toggle": {
            backgroundColor: color,
          },
        };
      },
    },
    {
      values: {
        ...flattenColorPalette(_theme("colors")),
      },
      type: "color",
    }
  );
});

export { sevissui };
