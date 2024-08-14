/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,cjs,tsx,jsx,ts}"],
  theme: {
    extend: {},
    borderRadius:{
      'lg': '30px 30px 30px 30px',
      'md': '5px 5px 5px 5px',
      'full': '100%'
    },
    keyframes: {
      "fade-in": {
          "0%": {
              opacity: 0
          },
          "100%": {
              opacity: 1
          },
      },
    }

  },
  plugins: [],
  darkMode: "class",
}