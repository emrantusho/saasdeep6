const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./_includes/**/*.njk", "./pages/**/*.md", "./*.njk"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
