import  { Box, AppBar, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';


const MoviesAppBar:FC = () =>{


  return(
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         {/* <LiveTvOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MOVIES
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MoviesAppBar;