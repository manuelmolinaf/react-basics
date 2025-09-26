import { useContext } from 'react'
import { FavoritesContext } from '../components/context/favorites.context'

export const useFavorites = () =>{

  const context = useContext(FavoritesContext);

  if(!context){
    throw new Error("useFavorites context must be used inside the favoritesContext Provider")
  }

  return context;

}