/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js',
  './src/index.js',
  './src/components/search/search.js',
  './src/components/current-weather/current-weather.js',
  './src/components/forecast/forecast.js',
  './src/components/Pollute/pollution.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}
