module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'mypink': '#fd79a8',
        'myblue': '#0984e3',
        'myemerald': '#55efc4',
        'mygreen': '#00b894',
        'mypurple': '#6c5ce7',
        'myorange': '#e17055',
        'myyellow': '#fdcb6e',
        'darkgray': '#636e72',
        'lightgray': '#b2bec3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: []
};
