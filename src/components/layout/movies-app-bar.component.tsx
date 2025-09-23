import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';
import { useNavigate } from 'react-router';

const MoviesAppBar: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            MOVIES
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MoviesAppBar;
