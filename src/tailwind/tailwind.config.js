module.exports = {
  mode: 'jit',
  purge: {
    content: ['src/**/*.liquid', 'src/**/*.md'],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'media',
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
            '[class~="lead"]': theme('colors.gray.700'),
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
            strong: {
              color: theme('colors.gray.800'),
            },
            'ol > li::before': {
              color: theme('colors.gray.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.orange.600'),
            },
            code: {
              color: theme('colors.gray.700'),
              backgroundColor: theme('colors.gray.300'),
              paddingLeft: '.25rem',
              paddingRight: '.25rem',
              borderRadius: '.25rem',
              fontWeight: '400',
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
        dark: {
          css: {
            color: theme('colors.gray.400'),
            '[class~="lead"]': theme('colors.gray.400'),
            'h1, h2, h3, h4': {
              color: theme('colors.gray.200'),
            },
            strong: {
              color: theme('colors.gray.300'),
            },        
            'ol > li::before': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.orange.600'),
            },
            a: {
              '&:link': {
                color: theme('colors.orange.600'),
              },
              '&:visited': {
                color: theme('colors.orange.700'),
              },
              '&:hover': {
                color: theme('colors.gray.200'),
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
  variants: { },
  plugins: [require('@tailwindcss/typography')],
};
