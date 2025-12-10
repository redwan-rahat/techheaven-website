/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "title": ["Bebas Neue", "sans-serif"],
        "page": ["Cabin", "sans-serif"],
        "logo": ["Chakra Petch", "sans-serif"],
        "menu": ["Rubik", "sans-serif"],
      },
      colors: {
        dmgreen: "#5ceabb",
        lmblue: "#267fff",
      },
    },
  },
  plugins: [require('daisyui')],
}
