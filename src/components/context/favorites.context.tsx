import { createContext, type ReactNode, useState, useEffect } from 'react';
import type { Movie } from '../../interfaces/movie.interface';

interface FavoritesContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  // Initialize directly from localStorage
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  // Keep localStorage in sync whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) =>
      prev.some((favoriteMovie) => favoriteMovie.id === movie.id)
        ? prev
        : [...prev, movie]
    );
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((favoriteMovie) => favoriteMovie.id !== id));
  };

  const isFavorite = (id: string) =>
    favorites.some((favoriteMovie) => favoriteMovie.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
