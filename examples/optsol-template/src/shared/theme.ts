import { createTheme } from '@mui/material';
import { OptTheme } from '@optsol/react';
import { Colors } from './colors';

export const optTheme: OptTheme = {
  light: {
    style: 'soft',
    primary: Colors.primary.light,
    primaryContrast: Colors.primary.dark,
    secondary: Colors.secondary,
    secondaryContrast: Colors.white
  }
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary.main
    },
    secondary: {
      main: Colors.secondary
    },
    error: {
      main: Colors.error.dark
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: { color: Colors.primary.dark }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
          padding: '12px 24px'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: Colors.primary.main
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: Colors.primary.light
          },
          '& .MuiOutlinedInput-root': {
            color: Colors.secondary,

            '& fieldset': {
              borderColor: Colors.primary.dark
            },
            '&:hover fieldset': {
              borderColor: Colors.primary.dark
            },
            '&.Mui-focused': {
              borderColor: Colors.secondary,
              backgroundColor: Colors.primary.light
            }
          },
          input: {
            height: 15,
            '&::placeholder': {
              color: Colors.primary.dark
            }
          }
        }
      },
      variants: [
        {
          props: { color: 'error' },
          style: {
            '&:hover': {
              backgroundColor: Colors.white
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: Colors.error.dark
              },
              '&:hover fieldset': {
                borderColor: Colors.error.dark
              }
            },
            input: {
              '&::placeholder': {
                color: Colors.error.dark
              }
            }
          }
        }
      ]
    }
  },

  typography: {
    fontFamily: '"Effra Trial", "Roboto", sans-serif, "Helvetica"'
    // fontSize: 14,
  },
  shape: { borderRadius: 8 }
});
