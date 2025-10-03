import { darken, lighten, styled, ToggleButton } from '@mui/material';

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: 'none',
  '&.Mui-selected': {
    backgroundColor: theme.palette.mode === 'light' ? '#093B5F' : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' 
          ? lighten(theme.palette.primary.main, 0.4)
          : darken('#093B5F', 0.2),
      },
  },
  '&:not(.Mui-selected)': {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' 
          ? lighten(theme.palette.action.selected, 0.4)
          : darken(theme.palette.action.selected, 0.2),
      },
  },
}));
