import { InteractionType } from '@azure/msal-browser';
import {
  MsalAuthenticationResult,
  MsalAuthenticationTemplate,
  UnauthenticatedTemplate,
  useMsalAuthentication
} from '@azure/msal-react';
import { Box, Container } from '@mui/material';
import { PropsWithChildren, useLayoutEffect } from 'react';
import { Routes as ReactRoutes, Route, useNavigate } from 'react-router-dom';

import { OptActionToolbar } from '@optsol/react';
import { MsalConfig } from '../authentication/config/msalConfig';
import { Currency } from '../components/Currency';
import { useUserContext } from '../contexts/User.context';
import Cadastro from '../pages/Cadastro';

export const Routes = {
  Home: '/',
  Form: '/form',
  AccessDenied: '/access-denied'
} as const;

const AuthError: React.ElementType<MsalAuthenticationResult> = () => {
  const request = { scopes: MsalConfig.scopes };
  useMsalAuthentication(InteractionType.Redirect, request);
  return null;
};

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      sx={{ overflowY: 'scroll' }}
    >
      <Box position="sticky" top={0}>
        <OptActionToolbar />
      </Box>
      <Container maxWidth="lg" sx={{ height: 1 }}>
        {children}
      </Container>
    </Box>
  );
};

export const AuthenticationTemplate = ({ children }: PropsWithChildren) => {
  const { usuario } = useUserContext();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!usuario) navigate(Routes.AccessDenied);
  }, [navigate, usuario]);

  return (
    <MsalAuthenticationTemplate
      errorComponent={AuthError}
      interactionType={InteractionType.Redirect}
      authenticationRequest={{ scopes: MsalConfig.scopes }}
    >
      <Layout>{children}</Layout>
    </MsalAuthenticationTemplate>
  );
};

export const withoutAuthentication = (Component: () => JSX.Element) => {
  return (
    <UnauthenticatedTemplate>
      <Layout>
        <Component />
      </Layout>
    </UnauthenticatedTemplate>
  );
};

export const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route
        path={Routes.Home}
        element={
          <Layout>
            <Box
              display="flex"
              height={1}
              justifyContent="center"
              alignItems="center"
            >
              <iframe
                width="1240"
                height="724"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Currency value={10} color="red"></Currency>
            </Box>
          </Layout>
        }
      />
      <Route
        path={Routes.Form}
        element={
          <Layout>
            <Cadastro />
          </Layout>
        }
      />
    </ReactRoutes>
  );
};
