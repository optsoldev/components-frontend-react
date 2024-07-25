import { createTheme } from '@mui/material';

import { ColorPalette } from './colors';

export const SIDEBAR_WIDTH: string = '48px';
export const muiTheme = createTheme({
  palette: {
    primary: ColorPalette.primary,
    secondary: ColorPalette.secondary,
    error: ColorPalette.error,
    success: ColorPalette.success,
    warning: ColorPalette.warning
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: ColorPalette.primary.dark
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiSwitch-switchBase.Mui-checked +.MuiSwitch-track': {
            opacity: 1
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 32,
          '& .MuiTabs-flexContainer': { gap: 28 }
        },
        indicator: {
          borderRadius: 8,
          height: 3
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          minWidth: 0,
          minHeight: '44px',
          textTransform: 'none',
          '&.Mui-selected': {
            fontWeight: 600
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          paddingBottom: 8,
          fontWeight: 600,
          paddingTop: 8
        },
        outlined: {
          textTransform: 'none',
          paddingBottom: 7,
          fontWeight: 600,
          paddingTop: 7
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 2,
          '& .MuiSwitch-track': {
            borderRadius: 20 / 2,
            backgroundColor: 'white',
            border: `1px solid ${ColorPalette.grey.dark}`,
            '&::before, &::after': {
              content: '""',
              top: '50%',
              position: 'absolute',
              transform: 'translateY(-50%)',
              width: 16,
              height: 16
            }
          },
          '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 14,
            height: 14,
            margin: 1
          },
          '& .MuiButtonBase-root': {
            color: ColorPalette.grey.main,
            '&.Mui-checked': {
              color: 'white'
            }
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: ColorPalette.primary.main
        }
      }
    }
  },

  typography: {
    fontFamily:
      'Segoe UI, Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif',
    allVariants: {
      padding: 0,
      margin: 0
    },
    subtitle2: {
      fontSize: 16
    },
    body1: {
      fontSize: 14
    },
    caption1: {
      fontSize: 12
    },
    caption2: {
      fontSize: 10,
      lineHeight: 1
    },
    fontWeightBold: 600
  },

  shape: { borderRadius: 8 }
});
