import {
  createMuiTheme,
  LinearProgress,
  SwipeableDrawer,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core';
import React, { PropsWithChildren, Suspense, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { OptAppBar, OptLayoutProps } from '.';
import { BreadcrumbProvider } from '../../contexts/breadcrumb/breadcrumbContext';
import { OptThemeProvider, useOptTheme } from '../../contexts/theme/themeContext';
import { LocalStorageKeys } from '../../shared/constants';
import { GlobalStyles } from '../../shared/styles/global';
import { GlobalFontStyles } from '../../shared/styles/globalFont';
import { Theme } from '../../shared/styles/theme';
import { OptDrawerMenu } from '../OptDrawer/OptDrawerMenu';
import { OptSidebarMenu } from '../OptDrawer/OptSidebarMenu';
import * as S from './styles';

const darkMuiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: Theme.primary,
    },
    secondary: {
      main: Theme.secondary,
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

const lightMuiTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: Theme.primary,
    },
    secondary: {
      main: Theme.secondary,
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

export const OptLayout = (props: PropsWithChildren<OptLayoutProps>) => {
  return (
    <BrowserRouter>
      <OptThemeProvider>
        <BreadcrumbProvider>
          <OptInnerLayout {...props} />
        </BreadcrumbProvider>
      </OptThemeProvider>
    </BrowserRouter>
  );
};

const OptInnerLayout = ({
  sections,
  routes,
  noSidebar = false,
  onConfigurarPerfil,
  profile,
  children,
  onLogout,
  onNotificationsClick,
  onModulesClick,
  drawerLogo,
  version,
}: PropsWithChildren<OptLayoutProps>) => {
  const [dockedDrawer, setDockedDrawer] = useState(!!localStorage.getItem(LocalStorageKeys.DockedDrawer));
  const {
    currentTheme,
    state: { usingDarkTheme },
  } = useOptTheme();

  const hasSidebar = !noSidebar && !dockedDrawer;

  if (routes && routes.type !== Switch) {
    console.error('Prop routes is not a Switch!');
  }

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function handleDrawerOpen() {
    setDrawerOpen(true);
  }

  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  function toggleDockedDrawer() {
    if (!dockedDrawer) {
      localStorage.setItem(LocalStorageKeys.DockedDrawer, 'true');
      setDrawerOpen(false);
    } else {
      localStorage.removeItem(LocalStorageKeys.DockedDrawer);
      setDrawerOpen(true);
    }

    setDockedDrawer(!dockedDrawer);
  }

  console.log('usingDarkTheme: ', usingDarkTheme);
  return (
    <MaterialThemeProvider theme={usingDarkTheme ? darkMuiTheme : lightMuiTheme}>
      <StyledComponentsThemeProvider theme={currentTheme}>
        <GlobalFontStyles />
        <GlobalStyles />
        <OptAppBar
          profile={profile}
          onConfigurarPerfil={onConfigurarPerfil}
          onLogout={onLogout}
          onNotificationsClick={onNotificationsClick}
          onModulesClick={onModulesClick}
          onDrawerOpen={handleDrawerOpen}
          hideDrawerButton={dockedDrawer}
        />
        <S.Container>
          {hasSidebar && <OptSidebarMenu sections={sections} />}
          {dockedDrawer && (
            <S.DockedDrawerContainer>
              <OptDrawerMenu
                sections={sections}
                onToggleDockDrawer={toggleDockedDrawer}
                docked
                drawerLogo={drawerLogo}
                version={version}
              />
            </S.DockedDrawerContainer>
          )}

          {children}

          {routes && (
            <Suspense
              fallback={
                <div style={{ flex: 1, marginTop: 1 }}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="primary" />
                </div>
              }>
              <S.ContentContainer>{routes}</S.ContentContainer>
            </Suspense>
          )}
        </S.Container>
        <SwipeableDrawer anchor="left" open={drawerOpen} onClose={handleDrawerClose} onOpen={handleDrawerOpen}>
          <OptDrawerMenu
            sections={sections}
            onHideDrawer={handleDrawerClose}
            onToggleDockDrawer={toggleDockedDrawer}
            drawerLogo={drawerLogo}
            version={version}
          />
        </SwipeableDrawer>
      </StyledComponentsThemeProvider>
    </MaterialThemeProvider>
  );
};
