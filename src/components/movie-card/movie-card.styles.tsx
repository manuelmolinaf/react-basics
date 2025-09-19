import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const ImageNotFoundBox = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '2 / 3',
  backgroundColor: theme.palette.grey[300],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey[700],
}));

