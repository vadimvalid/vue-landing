/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const customContainer = plugin(function ({ addUtilities }) {
  addUtilities({
    '.container': {
      width: '100%',
      maxWidth: '1440px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      '@screen md': {
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }
    }
  })
})

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    colors: {
      primary: '#000',
      secondary: '#2C2D5B',
      orange: '#f67366',
      yellow: '#fff6df',
      white: '#fff',
      gray: '#9593A0',
      'gray-light': '#d3dce6',
      'gray-dark': '#4F4F4F'
    },
    fontFamily: {
      regular: ['Lato-Regular', 'sans-serif'],
      medium: ['Lato-Medium', 'sans-serif'],
      bold: ['Lato-Bold', 'sans-serif'],
      black: ['Lato-Black', 'sans-serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animation'),
    customContainer
  ]
}
