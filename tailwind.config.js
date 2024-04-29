/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
    "./*.{html,js}",
    "./problems/*.{html,js}",
    "./project_profile/*.{html,js}",
    "./projects/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      colors: {
        primary: 'hsl(47, 88%, 63%)',
        p_recipe_primary: 'hsl(14, 45%, 36%)',
        profile_project_primary: 'hsl(75, 94%, 57%)',
        profile_project_white: 'hsl(0, 0%, 100%)',
        profile_project_Grey: 'hsl(0, 0%, 20%)',
        profile_project_Dark_Grey: 'hsl(0, 0%, 12%)',
        profile_project_Off_Black: 'hsl(0, 0%, 8%)',
        p_recipe_Dark_Raspberry: 'hsl(332, 51%, 32%)',
        recipe_white: 'hsl(0, 0%, 100%)',
        recipe_neutral_rose_white: 'hsl(330, 100%, 98%)',
        recipe_neutral_eggshell: 'hsl(30, 54%, 90%)',
        recipe_neutral_Grey: 'hsl(0, 0%, 20%)',
        recipe_neutral_light_Grey: 'hsl(30, 18%, 87%)',
        recipe_neutral_dark_grey: 'hsl(0, 0%, 12%)',
        recipe_neutral_Wenge_Brown: 'hsl(30, 10%, 34%)',
        recipe_neutral_off_black: 'hsl(0, 0%, 8%)',
        recipe_neutral_Dark_Charcoal: 'hsl(24, 5%, 18%)',
        recipe_white_coffee: '#E3DDD7',

      },
      fontFamily: {
        body: ['Figtree'],
        customFont: ['Inter'],
        YoungSerif: ['YoungSerif'],
        Outfit: ['Outfit']
        // Inter: []
      },
      screens: {
        'mobile320': '320px',
        'tablet': '384px',
        'srecipe736': '736px',
      }
    },
  },
  plugins: [],
}

