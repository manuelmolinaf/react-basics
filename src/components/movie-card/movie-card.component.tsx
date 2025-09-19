import  {  useState, type FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import type { Movie } from '../../interfaces/movie.interface';
import { ImageNotFoundBox } from './movie-card.styles';

interface MovieCardProps {
  movie: Movie;
}



const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Card sx={{ width: '100%', borderRadius: 2, overflow: 'hidden' }}>
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
        <Typography gutterBottom variant="subtitle1" component="div" noWrap fontWeight='bold' mb={0}>
          {movie.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
