import { PassedInitialConfig } from 'angular-auth-oidc-client';

const isBrowser = typeof window !== 'undefined'; // ✅ Verifica si estás en el navegador

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_e5ynbTv2e', // Reemplaza con tu User Pool ID
    redirectUrl: isBrowser ? window.location.origin : 'http://localhost:4200', // 🔥 Previene error en SSR
    postLogoutRedirectUri: isBrowser ? window.location.origin : 'http://localhost:4200', // 🔥 Previene error en SSR
    clientId: 'on1m39rgc1lqefvua2tf5vs34', // Reemplaza con tu App Client ID de Cognito
    scope: 'openid profile email',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    maxIdTokenIatOffsetAllowedInSeconds: 600,
    issValidationOff: false,
    autoUserInfo: true,
  },
};
