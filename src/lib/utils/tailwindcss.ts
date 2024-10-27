// @ts-nocheck

import plugin from "tailwindcss";

const sevissui = plugin(({ addComponents, theme }) => {
  addComponents({
    ".btn": {},
  });
});

export { theme };
