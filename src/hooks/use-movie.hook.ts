import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Movie } from '../interfaces/movie.interface';

export const useMovie = (id?: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      setError('Movie Id is missing');
      setIsLoading(false);
      return;
    }

    const fetchMovie = async () => {
      try {
        const response = await axios.get<Movie>(`http://localhost:9999/movies/${id}`);
        setMovie(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else {
          setError('Unexpected error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return { movie, isLoading, error };
};
