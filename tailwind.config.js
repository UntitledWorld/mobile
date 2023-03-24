/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        'veryLight' : '#F3F3F3',
        'light' : '#E6E6E6',
        'dark1' : '#7F7F7F',
        'dark2' : '#4C4C4C',
        'dark3' : '#191919',
        'veryDark' : '#191919',
        'uniRed' : '#B01317',
      }
    },
  },
  plugins: [],
}
