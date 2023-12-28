/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
        serif: ['serif'],
        oregano: ['Oregano', 'cursive'],
        noto: ['Noto Sans JP', 'sans-serif'],
        hand: ['Gochi Hand', 'cursive'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
