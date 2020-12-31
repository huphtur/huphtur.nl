module.exports = {
  purge: {
    mode: 'all',
    content: ['src/**/*.njk', 'src/**/*.liquid', 'src/**/*.md'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    extend: {
      colors: {
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
      },
      spacing: {
        18: '4.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: `${theme('fontFamily.sans')}`,
              marginBottom: '.5em',
            },
            'h1 a': {
              textDecoration: 'none',
              fontWeight: '800',
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
  },
  variants: {
    translate: ['hover', 'group-hover'],
  },
  plugins: [require('@tailwindcss/typography')],
};
