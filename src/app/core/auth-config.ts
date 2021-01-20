import { AuthConfig } from 'angular-oauth2-oidc';

/**
 * more options here: https://manfredsteyer.github.io/angular-oauth2-oidc/docs/classes/AuthConfig.html
 */

export const authConfig: AuthConfig = {
  issuer: 'https://adfs-rdsnt004.robotron.de/adfs',
  clientId: 'a3928653-977e-43b8-aae7-4b3ddebea5a2', // The "Auth Code + PKCE" client
  loginUrl: 'https://adfs-rdsnt004.robotron.de/adfs/oauth2/authorize',
  responseType: 'id_token token',
  redirectUri: window.location.origin,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html', // important to register in angular.json
  scope: 'openid profile', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 15000, // Timeout for silent refresh
  timeoutFactor: 0.75, // factor for refresh access token (0.75 of expire_date)
  sessionChecksEnabled: false, // checks session
  showDebugInformation: false, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: true, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by IdentityServer's URI encoding
};
