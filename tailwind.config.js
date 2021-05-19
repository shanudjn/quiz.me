const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      green: colors.emerald,
      red: colors.red,
      white: colors.white
    },
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
    },
    boxShadow: {
      DEFAULT: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
    },
    borderColor: theme => ({
      ...theme('colors')
    }),

    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
