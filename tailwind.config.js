/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,liquid}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      purple: '#390645',
      pink: '#e834f2',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
