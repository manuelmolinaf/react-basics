
import axios from 'axios';
import type { Movie } from '../interfaces/movie.interface';
import { useQuery, useQueryClient } from '@tanstack/react-query';


export const useMovies = () => {

  const queryClient = useQueryClient();

  const fetchMovies = async ():Promise<Movie[]> =>{

    const response = await axios.get<Movie[]>('http://localhost:9999/movies');

    return response.data;
  }


  const movieQuery = useQuery<Movie[]>({ queryKey: ['movies'], queryFn: fetchMovies })

  const invalidateMovies = () =>{
    queryClient.invalidateQueries({
      queryKey:['movies'],
      exact:true
    })
  }


  return {  movies:movieQuery.data , isLoading: movieQuery.isLoading, error: movieQuery.error, refetch: invalidateMovies  };
};
