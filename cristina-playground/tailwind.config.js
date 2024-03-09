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
        'black': '#111827'
      },
      extend: {},
  },
  plugins: [],
}

