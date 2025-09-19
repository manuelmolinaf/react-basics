import { useEffect, useState } from 'react';
import type { Movie } from '../interfaces/movie.interface';


export const useMovies = () =>{

    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)
  
    useEffect(() => {
  
      const fetchMovies = async () =>{
        
        try{
          const response = await fetch('http://localhost:9999/movies');
  
          if(!response.ok){
            throw new Error('Error fetching data!')
          }
  
          const data: Movie[] = await response.json();
  
          setMovies(data);      
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch(err:any){
          setError(err.message)
        }
        finally{
          setIsLoading(false);
        }
  
      }
  
      fetchMovies();
  
    },
      []
    )


    return {movies, isLoading, error}
}