const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    mode: 'all',
    content: ['src/**/*.liquid', 'src/**/*.md'],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'media',
  theme: {
    colors: {
      'thc-bg': {
        DEFAULT: '#F9F5F2',
        dark: '#060A0D',
      },
      'thc-body': {
        DEFAULT: '#534F4C',
        dark: '#AAAEB1',
      },
      'thc-link': {
        DEFAULT: '#DC0088',
        dark: '#24FF7D',
      },
      'thc-visited': {
        DEFAULT: '#881550',
        dark: '#74EAAE',
      },
      'thc-hover': {
        DEFAULT: '#dcdcdc',
        dark: '#3D3D3D',
      },
      'thc-tint': {
        DEFAULT: '#D0CCC9',
        dark: '#43474a',
      },
      'thc-pop': {
        DEFAULT: '#557C1F',
        dark: '#9457E8',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Verdana', ...defaultTheme.fontFamily.sans],
        heading: ['Trebuchet MS', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.thc-body.DEFAULT'),
            '[class~="lead"]': theme('colors.thc-body.DEFAULT'),
            'h1, h2, h3, h4': {
              color: theme('colors.thc-body.DEFAULT'),
              fontFamily: theme('fontFamily.heading').join(', '),
              letterSpacing: theme('letterSpacing.tighter'),
            },
            'h1 a': {
              fontWeight: theme('fontWeight.bold'),
              textDecoration: 'none',
            },
            strong: theme('colors.thc-body.DEFAULT'),
            a: {
              color: theme('colors.thc-link.DEFAULT'),
              '&:visited': {
                color: theme('colors.thc-visited.DEFAULT'),
              },
              '&:hover': {
                backgroundColor: theme('backgroundColor.thc-hover.DEFAULT'),
              },
            },
            'ul > li::before': {
              backgroundColor: theme('colors.thc-body.DEFAULT'),
            },
            'ol > li::before': {
              color: theme('colors.thc-body.DEFAULT'),
            },
            blockquote: {
              color: theme('colors.thc-body.DEFAULT'),
              borderLeftColor: theme('colors.thc-pop.DEFAULT'),
            },
            code: {
              color: theme('colors.thc-body.DEFAULT'),
              backgroundColor: theme('backgroundColor.thc-hover.DEFAULT'),
              borderRadius: theme('borderRadius.md'),
              padding: theme('padding.1'),
            },
            'code::before, code::after': {
              content: 'none',
            },
            pre: {
              color: theme('colors.thc-body.DEFAULT'),
              backgroundColor: theme('backgroundColor.thc-hover.DEFAULT'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.thc-body.dark'),
            '[class~="lead"]': theme('colors.thc-body.dark'),
            'h1, h2, h3, h4': {
              color: theme('colors.thc-body.dark'),
            },
            strong: theme('colors.thc-body.dark'),
            a: {
              color: theme('colors.thc-link.dark'),
              '&:visited': {
                color: theme('colors.thc-visited.dark'),
              },
              '&:hover': {
                backgroundColor: theme('backgroundColor.thc-hover.dark'),
              },
            },
            'ul > li::before': {
              backgroundColor: theme('colors.thc-body.dark'),
            },
            'ol > li::before': {
              color: theme('colors.thc-body.dark'),
            },
            blockquote: {
              color: theme('colors.thc-body.dark'),
              borderLeftColor: theme('colors.thc-pop.dark'),
            },
            code: {
              color: theme('colors.thc-body.dark'),
              backgroundColor: theme('backgroundColor.thc-hover.dark'),
            },
            pre: {
              color: theme('colors.thc-body.dark'),
              backgroundColor: theme('backgroundColor.thc-hover.dark'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
