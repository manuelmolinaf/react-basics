import { useState } from 'react';
import axios from 'axios';
import type { Movie } from '../interfaces/movie.interface';

export const useCreateMovie = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [newMovie, setNewMovie] = useState<Movie | null>(null);

  const createMovie = async (movie: Movie) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await axios.post<Movie>('http://localhost:9999/movies',movie, );

      setNewMovie(response.data);
      setIsSuccess(true);
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

  return { newMovie, isLoading, error, isSuccess, createMovie };
};
