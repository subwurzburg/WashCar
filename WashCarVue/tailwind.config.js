module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
    `./layouts/**/*.vue`
  ],
  theme: {
    extend: {
      colors: {
        'groot': '#24a213',
      },
    },
  },
  variants: {},
  plugins: [],
}