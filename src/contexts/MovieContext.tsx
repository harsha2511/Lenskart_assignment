import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Movie } from '@/data/mockMovies';

interface MovieContextType {
  favourites: Movie[];
  watchlist: Movie[];
  addToFavourites: (movie: Movie) => void;
  removeFromFavourites: (movieId: number) => void;
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movieId: number) => void;
  isFavourite: (movieId: number) => boolean;
  isInWatchlist: (movieId: number) => boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

const FAVOURITES_KEY = 'movie_favourites';
const WATCHLIST_KEY = 'movie_watchlist';

export const MovieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem(FAVOURITES_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    const saved = localStorage.getItem(WATCHLIST_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const addToFavourites = (movie: Movie) => {
    setFavourites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavourites = (movieId: number) => {
    setFavourites((prev) => prev.filter((m) => m.id !== movieId));
  };

  const addToWatchlist = (movie: Movie) => {
    setWatchlist((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromWatchlist = (movieId: number) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isFavourite = (movieId: number) => favourites.some((m) => m.id === movieId);
  const isInWatchlist = (movieId: number) => watchlist.some((m) => m.id === movieId);

  return (
    <MovieContext.Provider
      value={{
        favourites,
        watchlist,
        addToFavourites,
        removeFromFavourites,
        addToWatchlist,
        removeFromWatchlist,
        isFavourite,
        isInWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies must be used within a MovieProvider');
  }
  return context;
};
