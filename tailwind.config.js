/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
    "./*.{html,js}",
    "./problems/*.{html,js}",
    "./project_profile/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      colors: {
        primary: 'hsl(47, 88%, 63%)',
        profile_project_primary: 'hsl(75, 94%, 57%)',
        profile_project_white: 'hsl(0, 0%, 100%)',
        profile_project_Grey: 'hsl(0, 0%, 20%)',
        profile_project_Dark_Grey: 'hsl(0, 0%, 12%)',
        profile_project_Off_Black: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        body: ['Figtree'],
        customFont: ['Inter']
        // Inter: []
      },
      screens: {
        'mobile320': '320px',
        'tablet': '384px',
        // "profile384": '384px'
      }
    },
  },
  plugins: [],
}

