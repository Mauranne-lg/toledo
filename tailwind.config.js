module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'main-green': '#a1bf43',
      'secondary-green': '#57a077',
      'whitesmoke': '#fbfbfb',
      'light-grey': '#707070',
      'white':'#ffffff',
      'black':'#000000',
      'main-blue':'#0084B5',
    },
    fontFamily: {
      serif: ['PTSerif', 'serif'],
      sans: ['PTSans', 'sans-serif'],

    },
    extend: {
      backgroundImage: theme => ({
        'toledo': "url('/src/assets/toledo-bird.jpg')",
        'mission': "url('/src/assets/sprout.jpg')",
        'history': "url('/src/assets/history.jpg')",
        }),
      height: {
        'jumbotron': '20rem',
      }
    },
  },
  plugins: [],
}