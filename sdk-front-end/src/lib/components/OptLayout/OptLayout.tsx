import { LinearProgress, SwipeableDrawer } from '@material-ui/core';
import React, { PropsWithChildren, Suspense, useState } from 'react';
import { Switch } from 'react-router-dom';
import { OptAppBar, OptLayoutProps } from '.';
import { LocalStorageKeys } from '../../shared/constants';
import { GlobalStyles } from '../../shared/styles/global';
import { OptDrawerMenu } from '../OptDrawer/OptDrawerMenu';
import { OptSidebar } from '../OptSidebar';
import * as S from './styles';

export const OptLayout = ({
  sections,
  routes,
  noSidebar = false,
  onManageProfile,
  profile,
  children,
  onLogout,
  drawerLogo,
  version,
  appBarConfig,
}: PropsWithChildren<OptLayoutProps>) => {
  const [dockedDrawer, setDockedDrawer] = useState(!!localStorage.getItem(LocalStorageKeys.DockedDrawer));

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

  return (
    <>
      <GlobalStyles />

      <OptAppBar
        profile={profile}
        onManageProfile={onManageProfile}
        onLogout={onLogout}
        onDrawerOpen={handleDrawerOpen}
        hideDrawerButton={dockedDrawer}
        hideBreadcrumb={appBarConfig?.hideBreadcrumb}
        content={appBarConfig?.content}
        actions={appBarConfig?.actions}
      />

      <S.Container>
        {hasSidebar && <OptSidebar sections={sections} />}
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
    </>
  );
};
