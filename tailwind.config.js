/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      colors: {
        periwinkle: "#D2D2FF",
        customBlue: "#78B5EA",
        customShadow: "#CAE6FFE5",
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "custom-focus": "0 0 8px #CAE6FFE5",
      },
    },
  },
  plugins: [],
};
