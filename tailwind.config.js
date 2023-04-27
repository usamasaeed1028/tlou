/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
      'inputModification': 'inset 0px 0px 3px rgba(255, 255, 255, 0.31)',
    }
,
      fontFamily:{
        inter:[ 'Inter', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        roboto:['Roboto', 'sans-serif']
      },
      aspectRatio: {
        'banner+usersByCountry&&MatchPlayedCharts-11/4': '11/4',
        'UsersActiveOnAPageChart-25/13':'25/13',
        'logo-14/5':'14/5',
        'foughnutChartNewLgend-24/4':'24/4',
        'bannerPhoto-7/11':'7/11'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width':'width'
      }


    },
  },
  plugins: [  plugin(function ({ addUtilities }) {
    addUtilities({
      ".scrollbar-hide": {
        /* IE and Edge */
        "-ms-overflow-style": "none",

        /* Firefox */
        "scrollbar-width": "none",

        /* Safari and Chrome */
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    });
  }),],
}