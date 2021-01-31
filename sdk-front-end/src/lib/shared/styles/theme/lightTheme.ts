import { OptTheme } from '.';
import { ColorPalette } from '../colors';

export const LightTheme: OptTheme = {
  primary: ColorPalette.primary,
  secondary: ColorPalette.secondary,
  background: ColorPalette.grey8,
  color: ColorPalette.black,
  divider: ColorPalette.grey7,

  scrollbar: {
    background: ColorPalette.grey8,
    shadowColor: ColorPalette.grey7,
    topColor: ColorPalette.primaryTints.tint5,
    bottomColor: ColorPalette.primaryTints.tint6,

    hover: {
      topCollor: ColorPalette.primaryTints.tint4,
      bottomCollor: ColorPalette.primaryTints.tint5,
    },
  },

  breadcrumb: {
    color: ColorPalette.white,
    hover: ColorPalette.primaryTints.tint4,
    separator: ColorPalette.primaryTints.tint4,
  },

  appBar: {
    background: ColorPalette.primary,
    color: ColorPalette.white,
    boxShadowColor: ColorPalette.grey4,

    side: {
      divider: ColorPalette.primaryTints.tint2,

      link: {
        color: ColorPalette.white,

        active: {
          color: ColorPalette.grey2,
          background: ColorPalette.white,
        },
        hover: {
          background: ColorPalette.primaryTints.tint1,
          color: ColorPalette.white,
        },
      },
    },

    menuButton: {
      color: ColorPalette.white,
      hover: {
        color: ColorPalette.white,
        background: ColorPalette.primaryTints.tint4,
      },
    },

    avatar: {
      background: ColorPalette.yellow,
      color: ColorPalette.white,
    },
  },

  sidebar: {
    background: ColorPalette.white,
    color: ColorPalette.black,
    divider: ColorPalette.grey7,

    link: {
      color: ColorPalette.grey2,

      active: {
        color: ColorPalette.black,
        background: ColorPalette.primaryTints.tint6,
      },
      hover: {
        background: ColorPalette.grey5,
        color: ColorPalette.black,
      },
    },
  },

  drawer: {
    docked: {
      borderColor: ColorPalette.grey7,
    },

    close: {
      color: ColorPalette.primary,
      background: 'inherit',
    },

    versionColor: ColorPalette.grey5,
    background: ColorPalette.white,
    color: ColorPalette.black,
    divider: ColorPalette.grey7,

    link: {
      color: ColorPalette.black,

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