import { OptTheme } from '.';
import { ColorPalette } from '../colors';

export const DarkTheme: OptTheme = {
  primary: ColorPalette.primary,
  secondary: ColorPalette.secondary,
  background: ColorPalette.black,
  color: ColorPalette.white,
  divider: ColorPalette.grey7,

  scrollbar: {
    background: ColorPalette.dark,
    shadowColor: ColorPalette.grey2,
    topColor: ColorPalette.primaryTints.tint3,
    bottomColor: ColorPalette.primaryTints.tint5,

    hover: {
      topCollor: ColorPalette.primaryTints.tint1,
      bottomCollor: ColorPalette.primaryTints.tint3,
    },
  },

  breadcrumb: {
    color: ColorPalette.primaryTints.tint4,
    hover: ColorPalette.white,
    separator: ColorPalette.white,
  },

  appBar: {
    background: ColorPalette.black,
    color: ColorPalette.primary,

    closeButton: {
      color: ColorPalette.primary,

      hover: {
        color: ColorPalette.black,
        background: ColorPalette.primaryTints.tint2,
      },
    },

    avatar: {
      background: ColorPalette.green,
      color: ColorPalette.white,
    },
  },

  sidebar: {
    background: ColorPalette.dark,
    color: ColorPalette.white,
    divider: ColorPalette.dark,

    link: {
      color: ColorPalette.white,

      active: {
        color: ColorPalette.white,
        background: ColorPalette.primary,
      },
      hover: {
        background: ColorPalette.primaryTints.tint4,
        color: ColorPalette.black,
      },
    },
  },

  drawer: {
    docked: {
      borderColor: ColorPalette.dark,
    },

    close: {
      color: ColorPalette.primary,
      background: 'inherit',
    },
    versionColor: ColorPalette.grey5,
    background: ColorPalette.dark,
    color: ColorPalette.black,
    divider: ColorPalette.grey7,

    link: {
      color: ColorPalette.white,

      active: {
        color: ColorPalette.white,
        background: ColorPalette.primary,
      },
      hover: {
        background: ColorPalette.primaryTints.tint4,
        color: ColorPalette.black,
      },
    },
  },
};
