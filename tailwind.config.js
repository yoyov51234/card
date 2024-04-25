/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
    "./*.{html,js}",
    "./problems/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      colors: {
        primary: 'hsl(47, 88%, 63%)',
      },
      fontFamily: {
        body: ['Figtree']
      },
      screens: {
        'mobile320': '320px',
        'tablet': '384px',
      }
    },
  },
  plugins: [],
}

