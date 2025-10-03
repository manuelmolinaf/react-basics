import Keycloak from 'keycloak-js';
import axiosClient from './axios.util';

interface AuthClientTokens {
  idToken?: string;
  refreshToken?: string;
  token?: string;
}

let keycloakError: Error | null = null;
let initializationAttempted = false;


export const getKeycloakError = () => keycloakError;
export const clearKeycloakError = () => { keycloakError = null; };
export const setKeycloakInitializationAttempted = () => { initializationAttempted = true; };
export const isKeycloakInitializationAttempted = () => initializationAttempted;

export const keycloakInstance = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID
});

export const keycloakinitOptions = {
  onLoad: 'login-required',
  checkLoginIframe: true,
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onKeycloakEvent = (event: string, error?: any) => {
  setKeycloakInitializationAttempted();
  
  switch(event) {
    case 'onInitError':
      keycloakError = error || new Error('Failed to initialize Keycloak');
      break;
    case 'onAuthError':
      keycloakError = error || new Error('Authentication failed');
      break;
    case 'onAuthRefreshError':
      keycloakError = error || new Error('Token refresh failed');
      break;
    case 'onTokenExpired':
      keycloakError = new Error('Session expired');
      break;
    // Clear error on success cases
    case 'onReady':
    case 'onAuthSuccess':
    case 'onAuthRefreshSuccess':
      clearKeycloakError();
      break;
    default:
      break;
  }
};

export const onKeycloakTokens = (tokens: AuthClientTokens) => {
  if (tokens.token) {
    console.log(tokens.token);
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokens.token}`;
  }
};


export const checkKeycloakConnection = async () => {
  try {
    const connected = await keycloakInstance.init({ onLoad: 'check-sso' });
    return connected;
  } catch (error) {
    keycloakError = error instanceof Error ? error : new Error('Keycloak connection check failed');
    return false;
  }
};