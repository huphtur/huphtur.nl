module.exports = {
  purge: {
    mode: 'all',
    content: ['src/**/*.njk', 'src/**/*.liquid', 'src/**/*.md'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    colors: {
      black: '#000',
      orange: {
        50: '#f9f4e6',
        100: '#faecc7',
        200: '#f8df91',
        300: '#f4c94d',
        400: '#f1a71d',
        500: '#ef820b',
        600: '#fe6201',
        700: '#c5460d',
        800: '#a33813',
        900: '#872e15',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    extend: {
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
              color: theme('colors.gray.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },
            blockquote: {
              borderLeftColor: theme('colors.orange.600'),
            },
            pre: {
              code: {
                '&:after': { content: 'none !important' },
              },
            },
            code: {
              color: theme('colors.gray.700'),
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
                color: theme('colors.orange.700'),
              },
              '&:visited': {
                color: theme('colors.orange.900'),
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
