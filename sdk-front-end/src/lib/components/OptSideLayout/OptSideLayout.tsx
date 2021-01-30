import { LinearProgress } from '@material-ui/core';
import React, { PropsWithChildren, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { OptSideLayoutProps } from '.';
import { GlobalStyles } from '../../shared/styles/global';
import { OptSidebarMenu } from '../OptDrawer/OptSidebarMenu';
import * as S from './styles';

export const OptSideLayout = ({
  sections,
  routes,
  onConfigurarPerfil,
  profile,
  children,
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

      <S.SuperContainer>
        <OptSidebarMenu sections={sections} />

        <S.MainContentContainer>
          {children}
          {routes && (
            <Suspense
              fallback={
                <div style={{ flex: 1, marginTop: 1 }}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="primary" />
                </div>
              }>
              <S.MainContentContainer>{routes}</S.MainContentContainer>
            </Suspense>
          )}
        </S.MainContentContainer>

        {/* <OptAppBar
        profile={profile}
        onConfigureProfile={onConfigurarPerfil}
        onLogout={onLogout}
        onDrawerOpen={handleDrawerOpen}
        hideDrawerButton={dockedDrawer}
        actions={appBarConfig?.actions}
      /> */}
      </S.SuperContainer>
    </>
  );
};
