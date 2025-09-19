import { type FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

interface MovieCardSkeletonProps {
  withText?: boolean;
}

const MovieCardSkeleton: FC<MovieCardSkeletonProps> = ({ withText = true }) => {
  return (
    <Card sx={{ width: '100%', borderRadius: 2, overflow: 'hidden' }}>
      {/* Image skeleton */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%" 
        sx={{ aspectRatio: '2 / 3' }} // ✅ matches CardMedia
      />

      {/* Title skeleton */}
      {withText && (
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div" noWrap>
            <Skeleton width="80%" />
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default MovieCardSkeleton;
