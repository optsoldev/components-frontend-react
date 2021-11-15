import {
  createTheme,
  Theme,
  ThemeProvider as MaterialThemeProvider
} from '@mui/material/styles';
import { PropsWithChildren, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { BreadcrumbProvider } from '../../contexts/breadcrumb/breadcrumbContext';
import {
  OptThemeProvider,
  useOptTheme
} from '../../contexts/theme/themeContext';
import { CustomOptTheme } from '../../contexts/theme/themeState';
import { LocalStorageKeys } from '../../shared/constants';
import { RobotoFontStyles } from '../../shared/styles/robotoFont';
import {
  OptFullTheme,
  OptTheme,
  transformTheme
} from '../../shared/styles/theme';
import { OptLoading } from '../OptLoading';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const generateMuiTheme = (
  optTheme: OptFullTheme,
  usingDarkTheme: boolean = false,
) => {
  return createTheme({
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
};

export interface OptLayoutProviderProps {
  darkTheme?: boolean;
  theme: OptTheme;
  noRouter?: boolean;
}

export const OptLayoutProvider = ({
  children,
  noRouter = false,
  ...props
}: PropsWithChildren<OptLayoutProviderProps>) => {
  return (
    <OptThemeProvider>
      {!noRouter && (
        <BrowserRouter>
          <BreadcrumbProvider>
            <OptThemedLayout noRouter={noRouter} {...props}>
              {children}
            </OptThemedLayout>
          </BreadcrumbProvider>
        </BrowserRouter>
      )}

      {noRouter && (
        <BreadcrumbProvider>
          <OptThemedLayout noRouter={noRouter} {...props}>
            {children}
          </OptThemedLayout>
        </BreadcrumbProvider>
      )}
    </OptThemeProvider>
  );
};

const OptThemedLayout = (props: PropsWithChildren<OptLayoutProviderProps>) => {
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

  useEffect(() => {
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

  useEffect(() => {
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

  useEffect(() => {
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

        {!themeLoaded ? <OptLoading /> : <>{children}</>}
      </StyledComponentsThemeProvider>
    </MaterialThemeProvider>
  );
};
