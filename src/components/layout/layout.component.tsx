import type { FC } from 'react';
import MoviesAppBar from './movies-app-bar.component';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';


const Layout:FC = () =>{



  return(
    <Box display='flex' flexDirection='column' height='100vh'>
      <MoviesAppBar />

      <Box component='main' display='flex'  flexDirection='column' flexGrow={1} bgcolor='background.default' overflow='auto' height='100%'>


          <Outlet/>

      </Box>
    </Box>


  )
  
}

export default Layout;