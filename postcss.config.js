module.exports = {
  plugins: [
    require('tailwindcss')('./src/css/tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [require('postcss-csso')({comments: false})]
      : []),
  ],
};
