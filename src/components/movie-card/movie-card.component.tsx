import  {  useState, type FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardMedia } from '@mui/material';
import type { Movie } from '../../interfaces/movie.interface';
import { ImageNotFoundBox } from './movie-card.styles';
import { useNavigate } from 'react-router';


interface MovieCardProps {
  movie: Movie;
}



const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const [imgError, setImgError] = useState(false);

  const navigate = useNavigate();

  const detailsOnClickHandler = (id:number) =>{

    navigate(`./${id}`)
  }

  return (
    <Card sx={{ width: '100%', borderRadius: 2, overflow: 'hidden' }} >
      {imgError ? (
        <ImageNotFoundBox>
          Image Not Found
        </ImageNotFoundBox>
      ) : (
        <CardMedia
          component="img"
          image={movie.img_link}
          alt={movie.name}
          onError={() => setImgError(true)}
          sx={{
            aspectRatio: '2 / 3',
            objectFit: 'cover',
          }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div" noWrap>
          {movie.name}
        </Typography>
        <Button variant='contained' onClick={()=>detailsOnClickHandler(movie.rank)}>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
