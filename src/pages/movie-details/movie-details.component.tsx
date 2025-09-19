import type { FC } from 'react'
import { useMovie } from '../../hooks/use-movie.hook'
import { useParams } from 'react-router';
import { Typography } from '@mui/material';



const MovieDetails:FC = () =>{

  const { id } = useParams();

  const { movie } =useMovie(Number(id));
 



  return (
    <>
      <Typography>
        {movie?.name}
      </Typography>
    </>

  )
}

export default MovieDetails