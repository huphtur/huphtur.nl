module.exports = {
  purge: {
    mode: 'all',
    content: ['_site/**/*.html'],
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
          'h1 a': {
            textDecoration: 'none',
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
            textDecoration: 'underline',
            '&:link': {
              color: theme('colors.orange.800'),
            },
            '&:visited': {
              color: theme('colors.pink.900'),
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