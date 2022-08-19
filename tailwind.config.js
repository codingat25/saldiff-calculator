/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
    theme: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    extend: {
      colors: {
        'darkCyan': 'hsl(183, 100%, 15%)',
        'grayCyan': 'hsl(184, 14%, 56%)',
        'darkGrayCyan': 'hsl(186, 14%, 43%)',
        'veryLightCyan': 'hsl(189, 41%, 97%)',
        'lightCyan': 'hsl(185, 41%, 84%)',
        'whiteBackground': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'sans':['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  }
