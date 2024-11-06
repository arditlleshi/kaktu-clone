/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f2',
          100: '#ffe6e0',
          200: '#ffc5b8',
          300: '#ff9c85',
          400: '#ff6647',
          500: '#ff3d1f',
          600: '#ff1f00',
          700: '#cc1900',
          800: '#a61500',
          900: '#8a1200',
        }
      }
    },
  },
  plugins: [],
};