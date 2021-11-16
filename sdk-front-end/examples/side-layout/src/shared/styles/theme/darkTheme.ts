import { OptFullTheme } from '.';
import { ColorPalette } from '../colors';

export const DarkTheme: OptFullTheme = {
  primary: ColorPalette.primary,
  primaryContrast: ColorPalette.white,
  secondary: ColorPalette.secondary,
  secondaryContrast: ColorPalette.white,
  background: ColorPalette.dark,
  color: ColorPalette.white,
  divider: ColorPalette.gray2,

  scrollbar: {
    background: ColorPalette.black,
    shadowColor: ColorPalette.gray2,
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
    boxShadowColor: ColorPalette.black,

    side: {
      divider: ColorPalette.dark,
      borderColor: ColorPalette.primary,

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

    menuButton: {
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

  toolbar: {
    color: ColorPalette.white,
    background: ColorPalette.primary,
  },

  sidebar: {
    background: ColorPalette.black,
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
      borderColor: ColorPalette.black,
    },

    close: {
      color: ColorPalette.primary,
      background: 'inherit',
    },
    versionColor: ColorPalette.gray5,
    background: ColorPalette.black,
    color: ColorPalette.black,
    divider: ColorPalette.gray1,

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

  inputs: {
    outline: ColorPalette.gray6,
    outlineFocus: ColorPalette.primary,
    outlineHover: ColorPalette.gray2,
  },
};
