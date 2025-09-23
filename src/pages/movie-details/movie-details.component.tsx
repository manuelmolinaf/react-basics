import type { FC } from 'react';
import { useMovie } from '../../hooks/use-movie.hook';
import { useParams, useNavigate } from 'react-router';
import {
  CardMedia,
  Container,
  Stack,
  Typography,
  Chip,
  Divider,
  Rating,
  Button,
  Box,
} from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import MovieDetailsSkeleton from '../../components/movie-details-skeleton/movie-details-skeleton.component';
import { useState } from 'react';
import { ImageNotFoundBox } from '../../components/movie-card/movie-card.styles';

const MovieDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movie, isLoading } = useMovie(Number(id));
  const [imgError, setImgError] = useState(false); // track image load error

  if (isLoading || movie === null) return <MovieDetailsSkeleton />;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Box>
          <Button
            onClick={() => navigate(-1)}
            startIcon={<ChevronLeft />}
            variant="text"
          >
            Back
          </Button>
        </Box>

        {/* Poster & Title */}
        <Stack direction="row" spacing={3}>
          {imgError ? (
            <ImageNotFoundBox sx={{ width: 270, height: 405, flexShrink: 0,  borderRadius:'8px'}}>
              Image Not Found
            </ImageNotFoundBox>
          ) : (
            <CardMedia
              component="img"
              image={movie.img_link}
              alt={movie.name}
              onError={() => setImgError(true)}
              sx={{
                width: 270,
                height: 405,
                borderRadius: 2,
                boxShadow: 3,
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
          )}

          <Stack spacing={1}>
            <Typography variant="h4" fontWeight="bold">
              {movie.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {movie.year} • {movie.duration} min • {movie.certificate}
            </Typography>

            {/* Rating */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Rating value={movie.imdb_rating / 2} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary">
                {movie.imdb_rating}/10 ({movie.imbd_votes.toLocaleString()} votes)
              </Typography>
            </Stack>

            {/* Genres */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {movie.genre.split(',').map((g) => (
                <Chip key={g} label={g.trim()} color="primary" size="small" />
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Divider />

        {/* Director */}
        <Stack spacing={1}>
          <Typography variant="h6">Director</Typography>
          <Typography>{movie.director_name}</Typography>
        </Stack>

        {/* Writers */}
        <Stack spacing={1}>
          <Typography variant="h6">Writers</Typography>
          <Typography variant="subtitle1">
            {movie.writer_name.split(',').join(', ')}
          </Typography>
        </Stack>

        {/* Cast */}
        <Stack spacing={1}>
          <Typography variant="h6">Cast</Typography>
          <Typography variant="subtitle1">
            {movie.cast_name.split(',').join(', ')}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MovieDetails;
