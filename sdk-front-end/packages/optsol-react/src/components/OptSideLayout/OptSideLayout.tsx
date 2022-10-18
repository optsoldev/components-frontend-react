import { LinearProgress } from '@mui/material';
import { PropsWithChildren, Suspense, useEffect, useRef } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { GlobalStyles } from '../../shared/styles/global';
import { OptSideAppbar } from '../OptSideAppbar/OptSideAppbar';
import { OptSideLayoutProps } from './@types';
import * as S from './styles';

export function OptSideLayout({
  sections,
  routes,
  profile,
  children,
  onManageProfile,
  onLogout,
  appBarConfig,
}: PropsWithChildren<OptSideLayoutProps>) {
  const location = useLocation();
  const {
    state: { currentSideAppbarWidth },
  } = useOptTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  if (routes && routes.type !== Routes) {
    console.error('Prop routes is not a Routes!');
  }

  const scrollToTop = () =>
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollWidth,
      behavior: 'smooth',
      top: 0,
    });

  useEffect(() => {
    setTimeout(() => {
      scrollToTop();
    }, 300);
  }, [location]);

  return (
    <>
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

        <S.InitialContainer
          ref={containerRef}
          currentsidebarwidth={currentSideAppbarWidth}
        >
          <S.OptSideLayoutPortalContent>
            {children}
            {routes && (
              <Suspense
                fallback={
                  <div style={{ flex: 1, marginTop: 1 }}>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="primary" />
                  </div>
                }
              >
                <S.OptSideLayoutPortalContent>
                  {routes}
                </S.OptSideLayoutPortalContent>
              </Suspense>
            )}
          </S.OptSideLayoutPortalContent>
        </S.InitialContainer>
      </div>
    </>
  );
}
