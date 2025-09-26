import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
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
          <Button color='inherit' onClick={() => navigate('/movies')}>
            All Movies
          </Button>
          <Button color='inherit' onClick={() => navigate('/favorites')}>
            Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MoviesAppBar;
