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
    },
  },
  plugins: [],
};
