// src/themes/theme.ts
// src/themes/theme.ts
import type { PaletteMode, Theme } from '@mui/material';
import { createTheme, type ThemeOptions } from '@mui/material/styles';

const getThemeOptions = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: "#212121" },
          background:{
            default:"#F5F5F5"
          }
        }
      : {}),
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minHeight: 48,
          // Reduce icon size directly on the tab
          '& .MuiSvgIcon-root': {
            fontSize: '1.40rem', // or your desired size
          },
        },
        iconWrapper: {
          marginBottom: 0,
          marginRight: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export const getTheme = (mode: PaletteMode): Theme =>
  createTheme(getThemeOptions(mode));