import Color from 'color';

const PRIMARY_COLOR = '#008EB7';
const SECONDARY_COLOR = '#2B737E';

export const ColorPalette = {
  primaryContrast: {
    main: '#DFDFDF',
    dark: '#707070',
    light: '#FFF'
  },

  primary: {
    main: Color(PRIMARY_COLOR).darken(0.1).hex(),
    dark: PRIMARY_COLOR,
    light: Color(PRIMARY_COLOR).lighten(0.1).hex()
  },

  secondary: {
    main: Color(SECONDARY_COLOR).darken(0.1).hex(),
    dark: SECONDARY_COLOR,
    light: Color(SECONDARY_COLOR).lighten(0.1).hex()
  },

  success: {
    main: '#66BB6A',
    light: '#9AD29A',
    dark: '#26CD26'
  },

  warning: {
    main: '#FFA726',
    light: '#FFD9A2',
    dark: '#FF8F00'
  },

  error: {
    dark: '#DC392D',
    light: '#CB9A97',
    main: '#F44336'
  },

  silver: {
    light: '#FCFCFC',
    main: '#F7F8F9',
    dark: '#F1F2F4'
  },

  grey: {
    light: '#D5DAE1',
    dark: '#454854',
    main: '#909090'
  },

  black: '#000000',
  white: '#FFFFFF',

  statusRecebimento: {
    rascunho: '#909090',
    emAnalise: '#FFA726',
    descarregado: '#66BB6A',
    descarregando: '#FF7043',
    aguardandoDescarga: '#29B6F6'
  }
} as const;
