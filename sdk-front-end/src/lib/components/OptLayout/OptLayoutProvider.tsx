import {
  ThemeProvider as MaterialThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { OptLayoutProviderProps } from '.';
import { BreadcrumbProvider } from '../../contexts/breadcrumb/breadcrumbContext';
import { OptThemeProvider, useOptTheme } from '../../contexts/theme/themeContext';
import { CustomOptTheme } from '../../contexts/theme/themeState';
import { LocalStorageKeys } from '../../shared/constants';
import { RobotoFontStyles } from '../../shared/styles/robotoFont';
import { OptFullTheme, transformTheme } from '../../shared/styles/theme';
import { OptLoading } from '../OptLoading';

const generateMuiTheme = (optTheme: OptFullTheme, usingDarkTheme: boolean = false) => {
  return createMuiTheme({
    palette: {
      type: usingDarkTheme ? 'dark' : 'light',
      primary: {
        main: optTheme.primary,
      },
      secondary: {
        main: optTheme.secondary,
      },
    },
    overrides: {
      MuiOutlinedInput: {
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
      MuiIconButton: {
        root: {
          '&': {
            padding: 8,
          },
        },
      },
    },
  });
};

export const OptLayoutProvider = ({ children, ...props }: PropsWithChildren<OptLayoutProviderProps>) => {
  return (
    <OptThemeProvider>
      <BrowserRouter>
        <BreadcrumbProvider>
          <OptThemedLayout {...props}>{children}</OptThemedLayout>
        </BreadcrumbProvider>
      </BrowserRouter>
    </OptThemeProvider>
  );
};

const OptThemedLayout = (props: PropsWithChildren<OptLayoutProviderProps>) => {
  const { theme, darkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme), children } = props;

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
    <MaterialThemeProvider theme={generateMuiTheme(currentTheme, usingDarkTheme)}>
      <StyledComponentsThemeProvider theme={currentTheme}>
        <RobotoFontStyles />

        {!themeLoaded ? <OptLoading /> : <>{children}</>}
      </StyledComponentsThemeProvider>
    </MaterialThemeProvider>
  );
};
