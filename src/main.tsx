import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './app.component';
import { getTheme } from './theme/theme';
import { ThemeProvider } from '@mui/material';

import { BrowserRouter } from "react-router";
import { FavoritesProvider } from './components/context/favorites.context';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import { keycloakinitOptions, keycloakInstance, onKeycloakEvent, onKeycloakTokens } from './utils/keycloak.util';
import LoadingKeycloak from './components/layout/keycloak-loading/loading-keycloak.component';

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './utils/query-client.util';

const mode: 'light' | 'dark' = 'light';
const theme = getTheme(mode);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <ReactKeycloakProvider
      authClient={keycloakInstance}
      initOptions={keycloakinitOptions}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
      LoadingComponent={<LoadingKeycloak />}
    >
      <StrictMode>
        <BrowserRouter>

          <QueryClientProvider client={queryClient}>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </QueryClientProvider>

        </BrowserRouter>

      </StrictMode>
    </ReactKeycloakProvider>
  </ThemeProvider>

)
