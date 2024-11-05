/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,cjs,tsx,jsx,ts}"],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '125px'}
      },
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
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
        bounce: 'bounce 2s linear infinite',
        spin: "spin 1s linear infinite"
      },
      
  
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },

  },
  plugins: [],
  darkMode: "class",
}