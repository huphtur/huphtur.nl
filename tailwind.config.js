/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,liquid}'],
  theme: {
    colors: {
      light: '#E2E2E2',
      dark: '#1C2126',
      tint: '#2C3136',
      accent: '#EC622B',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
