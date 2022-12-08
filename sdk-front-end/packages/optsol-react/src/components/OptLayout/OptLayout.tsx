import { LinearProgress, SwipeableDrawer } from '@mui/material';
import React, { PropsWithChildren, Suspense, useState } from 'react';
import { Switch } from 'react-router-dom';
import { OptUserProfile } from '..';
import { LocalStorageKeys } from '../../shared/constants';
import { GlobalStyles } from '../../shared/styles/global';
import { OptAppBar } from '../OptAppBar';
import { OptDrawerMenu } from '../OptDrawer/OptDrawerMenu';
import { OptMenuSection, OptSidebar } from '../OptSidebar';
import * as S from './styles';

export interface OptLayoutProps {
  /** Sections of the menus. Each object with the menu links will be splitted into different lists, separated by a Divider.  */
  sections: OptMenuSection[];
  /** Application routes within a \<Switch\> \</Switch\>   */
  routes?: JSX.Element;
  /** Disables the sidebar */
  noSidebar?: boolean;
  profile: OptUserProfile | undefined;

  onManageProfile: () => void;
  onLogout: () => void;

  appBarConfig?: {
    hideBreadcrumb?: boolean;
    /** Content that will be displayed at appbar's start */
    content?: JSX.Element;
    /** Actions that will be displayed at the end of the appbar, before the profile button */
    actions?: JSX.Element;
  };

  /** Suggested max width of 136px */
  drawerLogo?: JSX.Element;
  version: string;
}

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
  const [dockedDrawer, setDockedDrawer] = useState(
    !!localStorage.getItem(LocalStorageKeys.DockedDrawer),
  );

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
    <React.Fragment>
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
                <LinearProgress color='secondary' />
                <LinearProgress color='primary' />
              </div>
            }
          >
            <S.ContentContainer>{routes}</S.ContentContainer>
          </Suspense>
        )}
      </S.Container>

      <SwipeableDrawer
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <OptDrawerMenu
          sections={sections}
          onHideDrawer={handleDrawerClose}
          onToggleDockDrawer={toggleDockedDrawer}
          drawerLogo={drawerLogo}
          version={version}
        />
      </SwipeableDrawer>
    </React.Fragment>
  );
};