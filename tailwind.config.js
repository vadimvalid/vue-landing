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
      fontSize: {
        none: '0',
        small: ['0.5rem', '1.2'],
        xs: ['0.75rem', '1.33'],
        sm: ['0.875rem', '1.14'],
        base: ['1rem', '1.5'],
        md: ['1.125rem', '1.2'],
        lg: ['1.5rem', '1.33'],
        xl: ['2rem', '1.125']
      },
      spacing: {
        none: '0',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        base: '1rem',
        medium: '1.25rem',
        lg: '1.5rem',
        xl: '1.875rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '3.5xl': '3.5rem',
        '4xl': '4rem',
        '4.5xl': '5rem',
        '5xl': '6rem',
        '5.5xl': '7rem',
        '6xl': '8rem',
        '7xl': '9rem',
        '8xl': '10rem',
        '8.5xl': '10.5rem',
        '9xl': '12rem'
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
