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
        <OptSideAppbar
          sections={sections}
          footerActions={appBarConfig?.actions}
          profile={profile}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          noLinkDescription={appBarConfig?.noLinkDescription}
        />

        <S.OptSideLayoutPortalContent>
          {children}
          {routes && (
            <Suspense
              fallback={
                <div style={{ flex: 1, marginTop: 1 }}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="primary" />
                </div>
              }>
              <S.OptSideLayoutPortalContent>{routes}</S.OptSideLayoutPortalContent>
            </Suspense>
          )}
        </S.OptSideLayoutPortalContent>
      </S.InitialContainer>
    </>
  );
};
