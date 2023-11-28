/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Oregano', 'cursive'],
      },
    },
  },
  plugins: [],
}

