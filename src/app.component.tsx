


import { type FC } from 'react';
import './app.styles.css';


import { Box } from '@mui/material';

import MoviesAppBar from './components/layout/movies-app-bar.component';
import MoviesGrid from './components/movies-grid/movies-grid.component';


const App: FC = () => {
  

  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <MoviesAppBar />

      <Box component='main' display='flex'  flexDirection='column' flexGrow={1} bgcolor='background.default' overflow='auto' height='100%'>

        <MoviesGrid/>
        
      </Box>
    </Box>
  );
}

export default App;
