import { OptTheme } from '.';
import { ColorPalette } from '../colors';

export const LightTheme: OptTheme = {
  primary: ColorPalette.primary,
  secondary: ColorPalette.secondary,
  background: ColorPalette.gray8,
  color: ColorPalette.black,
  divider: ColorPalette.gray7,

  scrollbar: {
    background: ColorPalette.gray8,
    shadowColor: ColorPalette.gray7,
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
    boxShadowColor: ColorPalette.gray4,

    side: {
      divider: ColorPalette.primaryTints.tint2,

      link: {
        color: ColorPalette.white,

        active: {
          color: ColorPalette.gray2,
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

  toolbar: {
    color: ColorPalette.white,
    background: ColorPalette.primary,
  },
  
  sidebar: {
    background: ColorPalette.white,
    color: ColorPalette.black,
    divider: ColorPalette.gray7,

    link: {
      color: ColorPalette.gray2,

      active: {
        color: ColorPalette.black,
        background: ColorPalette.primaryTints.tint6,
      },
      hover: {
        background: ColorPalette.gray5,
        color: ColorPalette.black,
      },
    },
  },

  drawer: {
    docked: {
      borderColor: ColorPalette.gray7,
    },

    close: {
      color: ColorPalette.primary,
      background: 'inherit',
    },

    versionColor: ColorPalette.gray5,
    background: ColorPalette.white,
    color: ColorPalette.black,
    divider: ColorPalette.gray7,

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

  inputs: {
    outline: ColorPalette.gray6,
    outlineFocus: ColorPalette.primary,
    outlineHover: ColorPalette.gray2,
  },
};
