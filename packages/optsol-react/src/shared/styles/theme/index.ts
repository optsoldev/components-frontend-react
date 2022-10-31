import color from 'color';
import { ColorPalette } from '../colors';

export interface OptBasicTheme {
  style: 'standard' | 'soft';
  primary: string;
  primaryContrast: string;
  secondary: string;
  secondaryContrast: string;
}
export interface OptTheme {
  light?: OptBasicTheme;
  dark?: OptBasicTheme;
}

export interface OptFullTheme {
  primary: string;
  primaryContrast: string;
  secondary: string;
  secondaryContrast: string;
  background: string;
  color: string;
  divider: string;

  scrollbar: {
    background: string;
    topColor: string;
    bottomColor: string;
    shadowColor: string;

    hover: {
      topCollor: string;
      bottomCollor: string;
    };
  };

  breadcrumb: {
    color: string;
    hover: string;
    separator: string;
  };

  appBar: {
    background: string;
    color: string;
    boxShadowColor?: string;
    noBoxShadow?: boolean;

    side?: {
      divider: string;
      borderColor: string;

      link: {
        color: string;
        active: {
          color: string;
          background: string;
        };
        hover: {
          color: string;
          background: string;
        };
      };
    };

    menuButton: {
      color: string;

      hover: {
        color: string;
        background: string;
      };
    };
    avatar: {
      background: string;
      color: string;
    };
  };

  toolbar: {
    background: string;
    color: string;
  };

  sidebar: {
    background: string;
    color: string;
    divider: string;

    link: {
      color: string;
      active: {
        color: string;
        background: string;
      };
      hover: {
        color: string;
        background: string;
      };
    };
  };

  drawer: {
    docked: {
      borderColor: string;
    };

    close: {
      color: string;
      background: string;
    };

    versionColor: string;
    background: string;
    color: string;
    divider: string;

    link: {
      color: string;
      active: {
        color: string;
        background: string;
      };
      hover: {
        color: string;
        background: string;
      };
    };
  };

  inputs: {
    outline: string;
    outlineFocus: string;
    outlineHover: string;
  };
}

function buildAppBarTheme(t: OptBasicTheme) {
  return {
    background: t.style === 'soft' ? ColorPalette.gray6 : t.primary,
    color: t.style === 'soft' ? t.primary : t.primaryContrast,
    boxShadowColor: 'rgba(0, 0, 0, 0.05)',
    noBoxShadow: false,

    side: {
      divider:
        t.style === 'soft'
          ? ColorPalette.gray5
          : color(t.primary).lighten(0.1).hex(),
      borderColor: ColorPalette.gray6,

      link: {
        color: t.style === 'soft' ? t.primary : t.primaryContrast,

        active: {
          background: t.style === 'soft' ? t.primary : t.primaryContrast,
          color: t.style === 'soft' ? t.primaryContrast : t.primary,
        },
        hover: {
          background: color(t.primary).lighten(0.25).hex(),
          color: t.primaryContrast,
        },
      },
    },

    menuButton: {
      color: t.primaryContrast,

      hover: {
        background: t.primaryContrast,
        color: t.primary,
      },
    },
    avatar: {
      background: t.secondary,
      color: t.secondaryContrast,
    },
  };
}

export function transformTheme(t: OptBasicTheme): OptFullTheme {
  return {
    primary: t.primary,
    primaryContrast: t.primaryContrast,
    secondary: t.secondary,
    secondaryContrast: t.secondaryContrast,
    background: ColorPalette.white,
    color: ColorPalette.gray2,
    divider: ColorPalette.gray6,

    scrollbar: {
      background: ColorPalette.white,
      topColor: ColorPalette.gray4,
      bottomColor: ColorPalette.gray5,
      shadowColor: ColorPalette.gray6,

      hover: {
        topCollor: ColorPalette.gray4,
        bottomCollor: ColorPalette.gray4,
      },
    },

    breadcrumb: {
      color: ColorPalette.gray2,
      hover: t.primary,
      separator: ColorPalette.gray2,
    },

    appBar: buildAppBarTheme(t),

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
          background: t.primary,
          color: t.primaryContrast,
        },
        hover: {
          background: t.secondary,
          color: t.secondaryContrast,
        },
      },
    },

    drawer: {
      docked: {
        borderColor: ColorPalette.gray6,
      },

      close: {
        background: 'inherit',
        color: t.secondary,
      },

      background: ColorPalette.white,
      color: ColorPalette.gray3,
      divider: ColorPalette.gray6,
      versionColor: ColorPalette.gray3,

      link: {
        color: ColorPalette.gray3,

        active: {
          background: t.primary,
          color: t.primaryContrast,
        },
        hover: {
          background: t.secondary,
          color: t.secondaryContrast,
        },
      },
    },

    inputs: {
      outline: ColorPalette.gray6,
      outlineFocus: t.primary,
      outlineHover: ColorPalette.gray5,
    },
  };
}
