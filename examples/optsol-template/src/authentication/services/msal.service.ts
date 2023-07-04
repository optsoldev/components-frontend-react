import { SilentRequest } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { useCallback } from 'react';

import { MsalConfig } from '../config/msalConfig';

export function useMsalService() {
  const { accounts, instance } = useMsal();

  const logout = useCallback(async () => {
    instance.logoutRedirect();
  }, [instance]);

  const getAccessToken = useCallback(
    async (scopes = MsalConfig.scopes) => {
      if (accounts.length === 0) return '';

      const [currentAccount] = accounts;

      const request: SilentRequest = {
        scopes: scopes,
        account: currentAccount
      };

      return instance
        .acquireTokenSilent(request)
        .then((response) => {
          if (!response.idTokenClaims) throw new Error('Erro ao obter token');

          if (!('extension_EmbarquejaAdmClaim' in response.idTokenClaims)) {
            logout();
            return;
          }

          return response.accessToken;
        })
        .catch(() => {
          // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
          throw new Error('Erro ao obter token');
        });
    },
    [accounts, instance, logout]
  );

  return { getAccessToken, logout };
}
