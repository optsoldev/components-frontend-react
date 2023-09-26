import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomNavigationClient } from '../shared/NavigationClient';
import { AuthenticationActions } from './authenticationActions';
import {
  AUTHENTICATION_INITIAL_DISPATCH,
  AuthenticationDispatch,
  AuthenticationReducer
} from './authenticationReducer';
import { AuthenticationState, UserInfo } from './authenticationState';
import { MsalConfig, pca } from './config/msalConfig';
import { useMsalService } from './services/msal.service';
interface Props {
  pca: PublicClientApplication;
  children: React.ReactElement;
}

function ClientSideNavigation({ pca, children }: Props) {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  // react-router-dom v6 doesn't allow navigation on the first render - delay rendering of MsalProvider to get around this limitation
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (firstRender) return null;

  return children;
}

const AuthenticationStateContext = createContext<AuthenticationState>({});
const AuthenticationDispatchContext = createContext<AuthenticationDispatch>(
  AUTHENTICATION_INITIAL_DISPATCH
);

type AuthenticationProps = { children: React.ReactNode };

function AuthenticationProvider({ children }: AuthenticationProps) {
  const [state, dispatch] = useReducer(AuthenticationReducer, {});

  return (
    <ClientSideNavigation pca={pca}>
      <MsalProvider instance={pca}>
        <AuthenticationStateContext.Provider value={state}>
          <AuthenticationDispatchContext.Provider value={dispatch}>
            {children}
          </AuthenticationDispatchContext.Provider>
        </AuthenticationStateContext.Provider>
      </MsalProvider>
    </ClientSideNavigation>
  );
}

function useAuthenticationContext() {
  const state = React.useContext(AuthenticationStateContext);
  const { logout, getAccessToken } = useMsalService();

  if (!state) {
    throw new Error(
      'useAuthenticationState deve ser utilizando dentro de um AuthenticationProvider'
    );
  }

  const { userInfo, tenantId, token } = state;

  const dispatch = React.useContext(AuthenticationDispatchContext);

  if (dispatch === undefined) {
    throw new Error(
      'useAuthenticationDispatch deve ser utilizando dentro de um AuthenticationProvider'
    );
  }

  const carregarUserInfo = useCallback(
    async (token?: string) => {
      const result: UserInfo = {
        id: '',
        nome: '',
        email: '',
      };
      dispatch({
        type: AuthenticationActions.CARREGAR_USER_INFO,
        payload: result
      });
    },
    [dispatch]
  );

  const definirToken = useCallback(
    (accessToken?: string) => {
      if (accessToken !== token)
        dispatch({
          type: AuthenticationActions.DEFINIR_TOKEN,
          payload: accessToken
        });
    },
    [dispatch, token]
  );

  const inicializar = useCallback(async () => {
    dispatch({ type: AuthenticationActions.LOADING_USER_INFO, payload: true });
    await getAccessToken()
      .then(async (token) => {
        await carregarUserInfo(token);
        definirToken(token);
      })
      .catch(() => {
        pca.loginRedirect({ scopes: MsalConfig.scopes }).then(null);
      })
      .finally(() => {
        dispatch({
          type: AuthenticationActions.LOADING_USER_INFO,
          payload: false
        });
      });
  }, [carregarUserInfo, definirToken, dispatch, getAccessToken]);

  useEffect(() => {
    inicializar();
  }, [inicializar]);

  return {
    userInfo,
    tenantId,
    token,
    logout
  };
}

export { AuthenticationProvider, useAuthenticationContext };

