import { Box, TextField, Grid, Divider, InputAdornment, Button } from '@mui/material';
import { useState, type FC } from 'react';
import MovieCard from '../../components/movie-card/movie-card.component';
import { useMovies } from '../../hooks/use-movies.hook';
import MovieCardSkeleton from '../../components/movie-card/movie-card-skeleton.component';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MovieDialog from '../../components/movie-dialog/movie-dialog.component';
import { useCreateMovie } from '../../hooks/use-create-movie.hook';
import type { Movie } from '../../interfaces/movie.interface';

const Movies: FC = () => {


  const [filter, setFilter] = useState<string>('');
  const [isMovieDialogOpen, setIsMovieDialogOpen] =useState(false);
  const { movies, isLoading } = useMovies();
  const {createMovie } = useCreateMovie();

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(filter.toLowerCase())
  );


  const onDialogSubmit = async (movie:Movie) =>{

    await createMovie(movie)
  }

  return (
    <Box flexGrow={1} display='flex' flexDirection='column'>

      <Box
        position='sticky'
        top={0}
        zIndex={1}
        bgcolor='background.default'
        py={2}
        px={2}
        display="flex"
        justifyContent="center"

      >
        <TextField

          variant='outlined'
          size='medium'
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
        <Button startIcon={<AddIcon/>} variant='contained' sx={{ml:3}} onClick={()=>setIsMovieDialogOpen(true)}>
          Add Movie
        </Button>

        <Divider sx={{ mt: 2 }} />
      </Box>
      <Box flexGrow={1} overflow='auto' p={2}>

        {
          isLoading ?
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} display='flex' alignContent='center' justifyContent='center' width='100%' >
              {[0, 1, 2, 3, 4, 5].map((_, index) => (
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

      <MovieDialog open={isMovieDialogOpen} onClose={()=>setIsMovieDialogOpen(false)} onSubmit={onDialogSubmit}/>
    </Box>
  )
}
export default Movies;