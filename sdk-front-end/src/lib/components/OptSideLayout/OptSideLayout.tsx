import { LinearProgress } from '@material-ui/core';
import React, { PropsWithChildren, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { OptSideLayoutProps } from '.';
import { GlobalStyles } from '../../shared/styles/global';
import { OptSideAppbar } from '../OptSideAppbar/OptSideAppbar';
import * as S from './styles';

export const OptSideLayout = ({
  sections,
  routes,
  profile,
  children,
  onManageProfile,
  onLogout,
  version,
  appBarConfig,
}: PropsWithChildren<OptSideLayoutProps>) => {
  if (routes && routes.type !== Switch) {
    console.error('Prop routes is not a Switch!');
  }

  return (
    <>
      <GlobalStyles noAppBar />

      <S.InitialContainer>
        <OptSideAppbar sections={sections} profile={profile} />

        <S.MainContent>
          {children}
          {routes && (
            <Suspense
              fallback={
                <div style={{ flex: 1, marginTop: 1 }}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="primary" />
                </div>
              }>
              <S.MainContent>{routes}</S.MainContent>
            </Suspense>
          )}
        </S.MainContent>

        {/* <OptAppBar
        profile={profile}
        onConfigureProfile={onConfigurarPerfil}
        onLogout={onLogout}
        onDrawerOpen={handleDrawerOpen}
        hideDrawerButton={dockedDrawer}
        actions={appBarConfig?.actions}
      /> */}
      </S.InitialContainer>
    </>
  );
};
