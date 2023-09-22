import { LinearProgress } from '@mui/material';
import {
  PropsWithChildren,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { useLocation } from 'react-router-dom';

import { useOptTheme } from '../../contexts/theme/themeContext';
import { GlobalStyles } from '../../shared/styles/global';
import { OptSideAppbar } from '../OptSideAppbar/OptSideAppbar';

import { OptSideLayoutProps } from './@types';
import * as S from './styles';

export function OptSideLayout({
  expandable,
  logo,
  sections,
  routes: Element,
  profile,
  children,
  onManageProfile,
  onLogout,
  appBarConfig,
  limitedSectionsView,
}: PropsWithChildren<OptSideLayoutProps>) {
  const location = useLocation();
  const {
    setCurrentSideAppbarWidth,
    state: { currentSideAppbarWidth },
  } = useOptTheme();

  const containerRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const width = appBarConfig?.sideAppbarWidth;
    if (width) setCurrentSideAppbarWidth(width);
  }, [appBarConfig?.sideAppbarWidth, setCurrentSideAppbarWidth]);

  return (
    <>
      <GlobalStyles noAppBar />

      <div style={{ width: '100vw', display: 'flex', overflowX: 'hidden' }}>
        <OptSideAppbar
          logo={logo}
          sections={sections}
          footerActions={appBarConfig?.actions}
          profile={profile}
          limitedSectionsView={limitedSectionsView}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          hideLinkDescription={appBarConfig?.hideLinkDescription}
          sideAppbarWidth={appBarConfig?.sideAppbarWidth}
          expandedSideAppbarWidth={appBarConfig?.expandedSideAppbarWidth}
          sectionsAlignment={appBarConfig?.sectionsAlignment}
          expandable={expandable}
        />

        <S.InitialContainer
          id={'content-container'}
          ref={containerRef}
          currentsidebarwidth={currentSideAppbarWidth}
        >
          <S.OptSideLayoutPortalContent>
            {children}
            {Element && (
              <Suspense
                fallback={
                  <div style={{ flex: 1, marginTop: 1 }}>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="primary" />
                  </div>
                }
              >
                <S.OptSideLayoutPortalContent>
                  <Element />
                </S.OptSideLayoutPortalContent>
              </Suspense>
            )}
          </S.OptSideLayoutPortalContent>
        </S.InitialContainer>
      </div>
    </>
  );
}
