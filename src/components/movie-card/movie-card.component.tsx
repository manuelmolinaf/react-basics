import  {  useState, type FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
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
    <Card
      onClick={() => detailsOnClickHandler(movie.rank)} 
    sx={{
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6,
      },
    }} >
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
       
      </CardContent>
    </Card>
  );
};

export default MovieCard;
