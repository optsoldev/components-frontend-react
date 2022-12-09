import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from '@mui/material';
import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { BreadcrumbProvider } from '../../contexts/breadcrumb/breadcrumbContext';
import {
  OptThemeProvider,
  useOptTheme,
} from '../../contexts/theme/themeContext';
import { CustomOptTheme } from '../../contexts/theme/themeState';
import { LocalStorageKeys } from '../../shared/constants';
import { RobotoFontStyles } from '../../shared/styles/robotoFont';
import {
  OptFullTheme,
  OptTheme,
  transformTheme,
} from '../../shared/styles/theme';
import { OptLoading } from '../OptLoading';

const generateMuiTheme = (
  optTheme: OptFullTheme,
  usingDarkTheme: boolean = false
) =>
  createTheme({
    palette: {
      mode: usingDarkTheme ? 'dark' : 'light',
      primary: {
        main: optTheme.primary,
      },
      secondary: {
        main: optTheme.secondary,
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&': {
              padding: 8,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& $notchedOutline': {
              borderColor: optTheme.inputs.outline,
            },
            '&:hover $notchedOutline': {
              borderColor: optTheme.inputs.outlineHover,
            },
            '&$focused $notchedOutline': {
              borderColor: optTheme.inputs.outlineFocus,
            },
          },
        },
      },
    },
  });

export interface OptLayoutProviderProps {
  darkTheme?: boolean;
  theme: OptTheme;
  noRouter?: boolean;
}

function OptThemedLayout(
  props: PropsWithChildren<Omit<OptLayoutProviderProps, 'noRouter'>>
) {
  const {
    theme,
    darkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme),
    children,
  } = props;

  const [themeLoaded, setThemeLoaded] = useState(false);

  const {
    currentTheme,
    state: { usingDarkTheme },
    setCustomTheme,
    setDarkTheme,
  } = useOptTheme();

  useLayoutEffect(() => {
    if (theme) {
      const newCustomTheme: CustomOptTheme = {};

      if (theme.light) {
        newCustomTheme.light = transformTheme(theme.light);
      } else if (theme.dark) {
        newCustomTheme.dark = transformTheme(theme.dark);
      }

      setCustomTheme(newCustomTheme);
    } else {
      setCustomTheme({});
    }
    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    setThemeLoaded(false);

    if (theme) {
      const newCustomTheme: CustomOptTheme = {};

      if (theme.light) {
        newCustomTheme.light = transformTheme(theme.light);
      } else if (theme.dark) {
        newCustomTheme.dark = transformTheme(theme.dark);
      }

      setCustomTheme(newCustomTheme);
    } else {
      setCustomTheme({});
    }

    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useLayoutEffect(() => {
    if (usingDarkTheme !== darkTheme) {
      setDarkTheme(darkTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkTheme]);

  return (
    <MaterialThemeProvider
      theme={generateMuiTheme(currentTheme, usingDarkTheme)}
    >
      <StyledComponentsThemeProvider theme={currentTheme}>
        <RobotoFontStyles />

        {!themeLoaded ? <OptLoading /> : children}
      </StyledComponentsThemeProvider>
    </MaterialThemeProvider>
  );
}

export function OptLayoutProvider({
  children,
  noRouter = false,
  ...props
}: PropsWithChildren<OptLayoutProviderProps>) {
  return (
    <OptThemeProvider>
      {!noRouter && (
        <BrowserRouter>
          <BreadcrumbProvider>
            <OptThemedLayout {...props}>{children}</OptThemedLayout>
          </BreadcrumbProvider>
        </BrowserRouter>
      )}

      {noRouter && (
        <BreadcrumbProvider>
          <OptThemedLayout {...props}>{children}</OptThemedLayout>
        </BreadcrumbProvider>
      )}
    </OptThemeProvider>
  );
}
