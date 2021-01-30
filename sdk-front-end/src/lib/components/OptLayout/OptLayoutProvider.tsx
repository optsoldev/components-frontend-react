import {
  ThemeProvider as MaterialThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core';
import React, { PropsWithChildren, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { OptLayoutProviderProps } from '.';
import { BreadcrumbProvider } from '../../contexts/breadcrumb/breadcrumbContext';
import { OptThemeProvider, useOptTheme } from '../../contexts/theme/themeContext';
import { LocalStorageKeys } from '../../shared/constants';
import { GlobalFontStyles } from '../../shared/styles/globalFont';
import { OptTheme } from '../../shared/styles/theme';

const generateMuiTheme = (optTheme: OptTheme, usingDarkTheme: boolean = false) => {
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

  const {
    currentTheme,
    state: { usingDarkTheme },
    setCustomTheme,
    setDarkTheme,
  } = useOptTheme();

  useEffect(() => {
    if (theme) {
      setCustomTheme(theme);
    } else {
      setCustomTheme({});
    }
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
        <GlobalFontStyles />

        {children}
      </StyledComponentsThemeProvider>
    </MaterialThemeProvider>
  );
};
