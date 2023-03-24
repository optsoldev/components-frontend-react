import { ColorPalette } from '../colors';

import { OptFullTheme } from '.';

export const LightTheme: OptFullTheme = {
  primary: ColorPalette.primary,
  primaryContrast: ColorPalette.white,
  secondary: ColorPalette.secondary,
  secondaryContrast: ColorPalette.black,
  background: ColorPalette.white,
  color: ColorPalette.gray2,
  divider: ColorPalette.gray6,

  appBar: {
    background: ColorPalette.primary,
    color: ColorPalette.white,
    boxShadowColor: 'rgba(0, 0, 0, 0.05)',

    side: {
      divider: ColorPalette.primaryTints.tint3,
      borderColor: ColorPalette.gray6,

      link: {
        color: ColorPalette.secondary,
        hover: {
          background: ColorPalette.gray6,
          color: ColorPalette.black,
        },

        active: {
          background: ColorPalette.white,
          color: ColorPalette.primary,
        },
      },
    },

    avatar: {
      background: ColorPalette.secondary,
      color: ColorPalette.white,
    },
    menuButton: {
      color: ColorPalette.secondary,

      hover: {
        background: ColorPalette.gray6,
        color: ColorPalette.secondary,
      },
    },
  },

  breadcrumb: {
    color: ColorPalette.gray2,
    hover: ColorPalette.primary,
    separator: ColorPalette.gray2,
  },

  drawer: {
    background: ColorPalette.white,
    color: ColorPalette.gray3,
    divider: ColorPalette.gray6,
    versionColor: ColorPalette.gray3,

    docked: {
      borderColor: ColorPalette.gray6,
    },
    close: {
      background: 'inherit',
      color: ColorPalette.secondary,
    },
    link: {
      color: ColorPalette.gray3,

      active: {
        background: ColorPalette.primary,
        color: ColorPalette.white,
      },
      hover: {
        background: ColorPalette.secondary,
        color: ColorPalette.white,
      },
    },
  },

  toolbar: {
    color: ColorPalette.gray2,
    background: ColorPalette.white,
  },

  sidebar: {
    background: ColorPalette.white,
    color: ColorPalette.gray3,
    divider: ColorPalette.gray6,

    link: {
      color: ColorPalette.gray3,

      active: {
        background: ColorPalette.primary,
        color: ColorPalette.white,
      },
      hover: {
        background: ColorPalette.secondary,
        color: ColorPalette.white,
      },
    },
  },

  scrollbar: {
    background: ColorPalette.white,
    topColor: ColorPalette.gray4,
    bottomColor: ColorPalette.gray5,

    hover: {
      topCollor: ColorPalette.gray4,
      bottomCollor: ColorPalette.gray4,
    },

    shadowColor: ColorPalette.gray6,
  },

  inputs: {
    outline: ColorPalette.gray6,
    outlineFocus: ColorPalette.primary,
    outlineHover: ColorPalette.gray5,
  },
};
