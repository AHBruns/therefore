const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "components/**/*.*",
    "interfaces/**/*.*",
    "pages/**/*.*",
    "utils/**/*.*",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: { ...colors, transparent: "transparent" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
