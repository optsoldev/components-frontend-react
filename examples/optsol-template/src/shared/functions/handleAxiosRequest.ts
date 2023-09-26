import { SilentRequest } from '@azure/msal-browser';
import { InternalAxiosRequestConfig } from 'axios';

import { MsalConfig, pca } from '../../authentication/config/msalConfig';

const handleAxiosRequest = async <T>(
  request: InternalAxiosRequestConfig<T>
) => {
  const accounts = pca.getAllAccounts();
  if (accounts.length === 0) return request;

  const [account] = accounts;

  const req: SilentRequest = {
    scopes: MsalConfig.scopes,
    account
  };

  const accessToken = await pca
    .acquireTokenSilent(req)
    .then((response) => response.accessToken)
    .catch((error) => {
      pca.loginRedirect({ scopes: MsalConfig.scopes }).then(null);
      throw error;
    });

  if (!accessToken) return request;

  return {
    ...request,
    headers: Object.assign(
      { Authorization: `Bearer ${accessToken}` },
      request.headers
    )
  };
};

export default handleAxiosRequest;
