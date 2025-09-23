import type { FC } from "react";
import { Container, Divider, Skeleton, Stack } from "@mui/material";

const MovieDetailsSkeleton: FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3}>
          {/* Poster skeleton */}
          <Skeleton
            variant="rectangular"
            width={250}
            height={375}
            sx={{ borderRadius: 2 }}
          />
          <Stack spacing={1} flex={1}>
            <Skeleton variant="text" width="60%" height={40} />
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangular" width="80%" height={24} />
          </Stack>
        </Stack>

        <Divider />

        <Skeleton variant="text" width="30%" height={30} />
        <Skeleton variant="text" width="50%" />

        <Skeleton variant="text" width="30%" height={30} />
        <Skeleton variant="text" width="70%" />

        <Skeleton variant="text" width="30%" height={30} />
        <Skeleton variant="rectangular" width="100%" height={50} />
      </Stack>
    </Container>
  );
};

export default MovieDetailsSkeleton;
