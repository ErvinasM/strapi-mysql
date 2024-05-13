import lt_trans from './extensions/translations/lt.js';

export default {
  config: {
    locales: ['lt', 'ru'],
    translations: {
      lt: lt_trans,
      },
    theme: {
      light: {
        colors: {
          primary100: '#eceeeb',
          primary200: '#dadcd8',
          primary300: '#c7cbc4',
          primary400: '#b5b9b1',
          primary500: '#8f9689',
          buttonPrimary500: '#8f9689',
          primary600: '#6a7362',
          buttonPrimary600: '#6a7362',
          primary700: '#45503b',
        },
      },
      dark: {
        colors: {
          primary100: '#1c2018',
          primary200: '#293023',
          primary300: '#45503b',
          primary400: '#58624f',
          primary500: '#6a7362',
          buttonPrimary500: '#6a7362',
          primary600: '#7d8576',
          buttonPrimary600: '#7d8576',
          primary700: '#8f9689',
        },
      },
  },
  tutorials: false,
},
  bootstrap() {},
}