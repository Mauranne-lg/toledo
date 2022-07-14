const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'main-green': '#90AB3C',
      'secondary-green': '#57a077',
      'whitesmoke': '#fbfbfb',
      'lighter-grey':'#e7e7e7',
      'light-grey': '#707070',
      'secondary-grey':'#F7F7F7',
      'white':'#ffffff',
      'black':'#000000',
      'main-blue':'#006A91',
    },
    fontFamily: {
      serif: ['PTSerif', 'serif'],
      sans: ['PTSans', 'sans-serif'],

    },
    extend: {
      backgroundImage: theme => ({
        'toledo': "url('/src/assets/toledo-bird.jpg')",
        'mission-inicio': "url('/src/assets/sprout.jpg')",
        'history': "url('/src/assets/history.jpg')",
        'mission-toledo':"url('/src/assets/mission-toledo2.jpg')",
        }),
      height: {
        'jumbotron': '24rem',
      }
    },
  },
  plugins: [],
}