/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'teal-dark': '#006666',
      'teal': '#008B8B',
      'teal-light': '#00CED1',
      'white': '#FFFFFF',
      'coral-dark': '#FF6F61',
      'coral': '#FF7F50',
      'coral-light': '#FFDAB9',
      'soft-peach': '#FFDAB9',
      'ivory-white': '#FFFFF0',
      'sky-blue': '#7AC8FF',
      'mint-green': '#9EFFC9',
      'peachy-pink': '#FFB7B2',
      'sky-100': '#e0f2fe',
      'yellow': '#fef08a',
      'light-grey': '#e5e7eb',
      'dark-indigo': '#312e81',
      'black': '#111827',
      'light-indigo': '#a5b4fc'
    },
    extend: {
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
    },
},
plugins: [
  require('tailwindcss-animated')
],
}

