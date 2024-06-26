/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Assistant", "sans-serif"],
        serif: ["serif"],
        oregano: ["Oregano", "cursive"],
        noto: ["Noto Sans JP", "sans-serif"],
        hand: ["Gochi Hand", "cursive"],
      },
      minHeight: {
        "screen-75": "75vh",
      },
      extend: {
        spacing: {
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
        },
      },
    },
  },
  plugins: [],
};
