// @ts-nocheck

import plugin from "tailwindcss";

const sevissui = plugin(({ addComponents, theme }) => {
  addComponents({
    ".btn": {},
  });
});

const generateSafeList = (theme) => {
  const colors = {
    ...theme.extend.colors,
  };

  const colorNames = Object.keys(colors);

  const safelist = [
    {
      pattern: new RegExp(`bg-(${colorNames.join("|")})-\\d+`),
      variants: ["hover", "active"],
    },
    {
      pattern: new RegExp(`text-(${colorNames.join("|")})-\\d+`),
      variants: ["hover", "active"],
    },
    {
      pattern: new RegExp(`border-(${colorNames.join("|")})-\\d+`),
      variants: ["hover", "active"],
    },
  ];

  return safelist;
};

export { generateSafeList };
