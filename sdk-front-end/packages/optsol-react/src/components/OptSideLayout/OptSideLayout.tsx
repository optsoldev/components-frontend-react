import { LinearProgress } from '@mui/material';
import React, { PropsWithChildren, Suspense, useEffect, useRef } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { OptSideLayoutProps } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';
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
  appBarConfig,
}: PropsWithChildren<OptSideLayoutProps>) => {
  const { listen } = useHistory();
  const {
    state: { currentSideAppbarWidth },
  } = useOptTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  if (routes && routes.type !== Switch) {
    console.error('Prop routes is not a Switch!');
  }

  useEffect(() => {
    containerRef.current?.scrollTo({ left: containerRef.current?.scrollWidth, behavior: 'smooth', top: 0 });
  }, []);

  useEffect(() => {
    listen(() => {
      setTimeout(() => {
        containerRef.current?.scrollTo({ left: containerRef.current?.scrollWidth, behavior: 'smooth', top: 0 });
      }, 300);
    });
  }, [listen]);

  return (
    <React.Fragment>
      <GlobalStyles noAppBar />

      <div style={{ width: '100vw', display: 'flex', overflowX: 'hidden' }}>
        <OptSideAppbar
          sections={sections}
          footerActions={appBarConfig?.actions}
          profile={profile}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          hideLinkDescription={appBarConfig?.hideLinkDescription}
        />

        <S.InitialContainer ref={containerRef} currentsidebarwidth={currentSideAppbarWidth}>
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
      </div>
    </React.Fragment>
  );
};
