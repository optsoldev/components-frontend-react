import { PublicClientApplication } from '@azure/msal-browser';

export const MsalConfig = {
  instance: import.meta.env.VITE_APP_BASE_B2C_INSTANCE ?? '',
  tenant: import.meta.env.VITE_APP_BASE_B2C_TENANT ?? '',
  signin_policy: import.meta.env.VITE_APP_BASE_B2C_SIGNIN_POLICY ?? '',
  clientid: import.meta.env.VITE_APP_BASE_B2C_CLIENTID ?? '',
  cache_location: import.meta.env.VITE_APP_BASE_B2C_CACHE_LOCATION ?? '',
  scopes: [import.meta.env.VITE_APP_BASE_B2C_SCOPES ?? ''],
  ssoScopes: [import.meta.env.VITE_APP_SSO_B2C_SCOPES ?? ''],
  redirect_uri: import.meta.env.VITE_APP_BASE_B2C_REDIRECT_URI ?? '',
  post_logout_redirect_uri:
    import.meta.env.VITE_APP_BASE_B2C_POST_LOGOUT_REDIRECT_URI ?? ''
};

export const pca = new PublicClientApplication({
  auth: {
    clientId: MsalConfig.clientid,
    postLogoutRedirectUri: MsalConfig.post_logout_redirect_uri,
    redirectUri: MsalConfig.redirect_uri,
    authority: `${MsalConfig.instance}/${MsalConfig.tenant}/${MsalConfig.signin_policy}`,
    knownAuthorities: [MsalConfig.instance]
  },
  cache: {
    cacheLocation: MsalConfig.cache_location, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: true // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    tokenRenewalOffsetSeconds: 600
    /*  loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      }
    } */
  }
});

/* // Default to using the first account if no account is active on page load
if (!pca.getActiveAccount() && pca.getAllAccounts().length > 0) {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  pca.setActiveAccount(pca.getAllAccounts()[0]);
}

// Listen for sign-in event and set active account
pca.addEventCallback((event) => {
  if (event.eventType !== EventType.LOGIN_SUCCESS || !event.payload) return;

  if ('account' in event.payload && event.payload.account) {
    const account = event.payload.account;
    pca.setActiveAccount(account);
  }
});
 */
