import { AuthConfig } from 'angular-oauth2-oidc';

/**
 * more options here: https://manfredsteyer.github.io/angular-oauth2-oidc/docs/classes/AuthConfig.html
 */

export const authConfig: AuthConfig = {
  issuer: 'https://sso-adfs-internal.robotron.de/adfs',
  clientId: '4a567398-f02b-486e-8302-70521ffe5807', // The "Auth Code + PKCE" client
  loginUrl: 'https://sso-adfs-internal.robotron.de/adfs/oauth2/authorize',
  responseType: 'id_token token',
  redirectUri: window.location.origin,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html', // important to register in angular.json
  scope: 'openid profile', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 15000, // Timeout for silent refresh
  timeoutFactor: 0.75, // factor for refresh access token (0.75 of expire_date)
  sessionChecksEnabled: false, // 
  showDebugInformation: false, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: true, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by IdentityServer's URI encoding
};
