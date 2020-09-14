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
        18: '4.5rem',
      },
      animation: {
        'spin-once': 'spin .69s cubic-bezier(.6,-0.28,.74,.05) reverse',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            fontFamily: `${theme('fontFamily.sans')}`,
            marginBottom: '.5em',
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
          'ol > li::before': {
            color: theme('colors.pink.800'),
          },
          'ul > li::before': {
            backgroundColor: theme('colors.pink.800'),
          },
          blockquote: {
            borderLeftColor: theme('colors.pink.800'),
          },
          pre: {
            code: {
              '&:after': { content: 'none !important' },
            },
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
      '2xl': {
        css: [
          {
            h1: {
              marginBottom: '.5em',
            },
          },
        ],
      },
    }),
  },
  variants: {
    animation: ['hover', 'motion-safe'],
  },
  plugins: [require('@tailwindcss/typography')],
};
