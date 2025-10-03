import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { useState, type FC } from 'react';
import { useNavigate } from 'react-router';

import MoviesAvatar from './movies-avatar.component';
import UserPopover from './user-popover/user-popover.component';


const MoviesAppBar: FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          {/* <Button color='inherit' onClick={() => navigate('/movies')}>
            All Movies
          </Button>
          <Button color='inherit' onClick={() => navigate('/favorites')}>
            Favorites
          </Button> */}

       
          <IconButton onClick={handleClick}>
            <MoviesAvatar size={50} />
          </IconButton>
          <UserPopover
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={handleClose}
          />

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MoviesAppBar;
