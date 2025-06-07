/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      spacing: {
        '0.9': '0rem',
        '1.35': '0rem',
        '1.8': '0rem',
        '2.7': '0rem',
        '3.6': '0rem',
        '4.5': '0rem',
        '5.4': '0rem',
        '6.3': '0rem',
        '7.2': '0rem',
        '8.1': '0rem',
        '9': '0rem',
        '9.9': '0rem',
        '10.8': '0rem',
        '13.5': '0rem',
        '16.2': '0rem',
      },
      width: {
        '[4.725rem]': '4.725rem',
        '[7.0875rem]': '7.0875rem',
        '[9.45rem]': '9.45rem',
        '16.2': '4.05rem',
      },
      height: {
        '[4.725rem]': '4.725rem',
        '[7.0875rem]': '7.0875rem',
        '[9.45rem]': '9.45rem',
        '16.2': '4.05rem',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translate(100%, -50%)', opacity: 0 },
          '100%': { transform: 'translate(0, -50%)', opacity: 1 },
        },
        'swatch-appear': {
          '0%': { 
            transform: 'translate(0px, 0px) scale(0)',
            opacity: 0 
          },
          '100%': { 
            transform: 'translate(var(--tx), var(--ty)) scale(1)',
            opacity: 1 
          },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        'slide-left': 'slide-left 0.3s ease-out forwards',
        'swatch-appear': 'swatch-appear 0.15s ease-out forwards',
        'fade-out': 'fade-out 0.3s ease-out forwards'
      },
    },
  },
  plugins: [],
};