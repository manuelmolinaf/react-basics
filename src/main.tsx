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
import { BrowserRouter} from "react-router";

const mode: 'light' | 'dark' = 'light';
const theme = getTheme(mode);

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>   
    </ThemeProvider>
    
  </StrictMode>
)
