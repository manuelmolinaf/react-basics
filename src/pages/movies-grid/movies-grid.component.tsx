import { Box, TextField, Grid, Divider, InputAdornment } from '@mui/material';
import { useState, type FC } from 'react';

import { useMovies } from '../../hooks/use-movies.hook';

import SearchIcon from '@mui/icons-material/Search';
import MovieCardSkeleton from '../../components/movie-card/movie-card-skeleton.component';
import MovieCard from '../../components/movie-card/movie-card.component';

const MoviesGrid: FC = () => {


  const [filter, setFilter] = useState<string>('');
  const { movies, isLoading } = useMovies();

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box flexGrow={1} display='flex' flexDirection='column'>

       <Box 
        position='sticky' 
        top={0} 
        zIndex={1} 
        bgcolor='background.default' 
        py={2}
        px={2}
 
      >
        <TextField
     
          variant='outlined'
          size='small'
          sx={{ width: '50%' }}
          placeholder='Search'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
         slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        />
        <Divider sx={{mt:2}}/>
      </Box>
      <Box flexGrow={1} overflow='auto' p={2}>

        {
          isLoading ?
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} display='flex' alignContent='center' justifyContent='center' width='100%' >
              {[0,1,2,3,4,5].map((_, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 2 }}>
                  <MovieCardSkeleton />
                </Grid>
              ))}
            </Grid>
            :
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} display='flex' alignContent='center' justifyContent='center' width='100%' >
              {filteredMovies.map((movie, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 2 }}>
                  <MovieCard movie={movie} />
                </Grid>
              ))}
            </Grid>
        }

      </Box>
    </Box>
  )
}
export default MoviesGrid;