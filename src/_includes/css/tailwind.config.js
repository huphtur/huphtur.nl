module.exports = {
  corePlugins: {
    // animation: false,
  },
  purge: {
    mode: 'all',
    content: ['./src/**/*.html', './src/**/*.njk', './src/**/*.md'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            fontFamily: `${theme('fontFamily.sans')}`,
          },
          h2: {
            fontFamily: `${theme('fontFamily.sans')}`,
          },
          h3: {
            fontFamily: `${theme('fontFamily.sans')}`,
          },
          h4: {
            fontFamily: `${theme('fontFamily.sans')}`,
          },
          code: {
            color: theme('colors.indigo.900'),
            backgroundColor: theme('colors.gray.300'),
            paddingLeft: '.25rem',
            paddingRight: '.25rem',
            borderRadius: '.25rem',
            fontWeight: '400',
          },
          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },
          a: {
            textDecoration: 'no-underline',
            '&:link': {
              color: theme('colors.orange.600'),
            },
            '&:visited': {
              color: theme('colors.pink.700'),
            },
            '&:hover': {
              color: theme('colors.black'),
              textDecoration: 'underline',
            },
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
