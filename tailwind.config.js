const colors = require('tailwindcss/colors')
module.exports = {
  future: {},
  purge: [],
  theme: {

    extend: {
      minWidth: {
        '20': '4.5em'
      },
    },
    colors: {
      emerald: colors.emerald,
      gray: colors.gray
    },
    variants: {},
    plugins: [
      // require('@tailwindcss/forms'),
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/aspect-ratio'),
    ],
  }
}