import { PublicClientApplication } from '@azure/msal-browser';

export const MsalConfig = {
  instance: import.meta.env.REACT_APP_BASE_B2C_INSTANCE ?? '',
  tenant: import.meta.env.REACT_APP_BASE_B2C_TENANT ?? '',
  signin_policy: import.meta.env.REACT_APP_BASE_B2C_SIGNIN_POLICY ?? '',
  clientid: import.meta.env.REACT_APP_BASE_B2C_CLIENTID ?? '',
  cache_location: import.meta.env.REACT_APP_BASE_B2C_CACHE_LOCATION ?? '',
  scopes: [import.meta.env.REACT_APP_BASE_B2C_SCOPES ?? ''],
  ssoScopes: [import.meta.env.REACT_APP_SSO_B2C_SCOPES ?? ''],
  redirect_uri: import.meta.env.REACT_APP_BASE_B2C_REDIRECT_URI ?? '',
  post_logout_redirect_uri:
    import.meta.env.REACT_APP_BASE_B2C_POST_LOGOUT_REDIRECT_URI ?? ''
};

export const pca = new PublicClientApplication({
  auth: {
    clientId: MsalConfig.clientid,
    postLogoutRedirectUri: MsalConfig.post_logout_redirect_uri,
    redirectUri: MsalConfig.redirect_uri,
    authority: `${MsalConfig.instance}/${MsalConfig.tenant}/${MsalConfig.signin_policy}`,
    knownAuthorities: [MsalConfig.instance]
  },
  system: {
    tokenRenewalOffsetSeconds: 600
  }
});
