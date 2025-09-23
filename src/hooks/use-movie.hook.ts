import { useEffect, useState } from 'react';
import type { Movie } from '../interfaces/movie.interface';


export const useMovie = (id?:string ) =>{

    const [movie, setMovie] = useState<Movie | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)





    useEffect(() => {

      if(!id){
        setError('Movie Id is missing');
        setIsLoading(false);
        return;
      }
  
      const fetchMovies = async () =>{
        
        try{
          const response = await fetch(`http://localhost:9999/movies/${id}`);
  
          if(!response.ok){
            throw new Error('Error fetching data!')
          }
  
          const data: Movie = await response.json();
  
          setMovie(data);      
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


    return {movie, isLoading, error}
}