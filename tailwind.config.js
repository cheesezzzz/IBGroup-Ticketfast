/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-50': '#6F737F',
        'primary-100': '#333333',
        'primary-200': '#1E1E1E',
        'primary-300': '#060606',
        'secondary-100': '#FFFFFF',
        'secondary-200': '#F2F2F2',
        'secondary-250': '#ECECEE',
        'secondary-300': '#C7C7C7',
        'secondary-350': '#B0B0B0',
        'accent-100': '#B5E865',
        'accent-200': '#99C455',
        'accent-300': '#81A648',
        'accent-400': '#425424',
        'stroke': '#E6E6E6'
      }

    },
  },
  plugins: [],
}