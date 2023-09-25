import { mdiAnchor, mdiBellOutline } from '@mdi/js';
import { Box, LinearProgress } from '@mui/material';
import { OptLayoutProvider, OptSideAppbar } from '@optsol/react';
import { Suspense, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSections } from './hooks/useSections';
import { AppRoutes } from './routes/index.routes';
import { Colors } from './shared/colors';
import { optTheme } from './shared/theme';

function App() {
  const location = useLocation();
  const sections = useSections();
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () =>
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollWidth,
      behavior: 'smooth',
      top: 0
    });

  useEffect(() => {
    setTimeout(() => {
      scrollToTop();
    }, 300);
  }, [location]);

  return (
    <OptLayoutProvider noRouter theme={optTheme}>
      <OptSideAppbar
        logo={{ icon: mdiAnchor, path: '/' }}
        sections={sections}
        onLogout={console.log}
        onManageProfile={console.log}
        profile={{
          name: 'Afonssim do Que',
          email: 'afonso@optsol.com.br',
          avatarSrc: undefined
        }}
        footerActions={[
          {
            icon: mdiBellOutline,
            iconColor: Colors.primary.main,
            onClick: () => {
              console.log('Icon Action!');
            },
            title: 'Notifications'
          }
        ]}
        hideLinkDescription={true}
        sectionsAlignment="center"
        expandable
      />

      <Box ref={containerRef} id="content-container" display="flex" flex={1}>
        <Suspense
          fallback={
            <div style={{ flex: 1, marginTop: 1 }}>
              <LinearProgress color="secondary" />
              <LinearProgress color="primary" />
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </Box>
    </OptLayoutProvider>
  );
}

export default App;

