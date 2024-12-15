/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        seconge: ['seconge', 'ui-sans-serif;'],
        helvetica: ['Helvetica', 'Arial', 'ui-sans-serif;'],
      },
      // fontFamily: {
      //   sans: ['Montserrat', "Montserrat"],
      // },
      keyframes: {
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' }, // Changed to translate from the right
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-left': 'fade-left 3s ease-in-out',
        'fade-right': 'fade-right 3s ease-in-out', // Added fade-right animation
      },
    },
  },
  plugins: [],
}
