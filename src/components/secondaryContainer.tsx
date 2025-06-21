import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';

const secondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    <div className=" relative z-20 bg-black py-5 w-full">
      {/* movies list - now playing  - trending  -- horror  -- comedy */}

      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
      <MovieList title="Popular" movies={movies?.popularMovies || []} />
      <MovieList title="Trending" movies={movies?.nowPlayingMovies || []} />
      <MovieList title="Comedy" movies={movies?.nowPlayingMovies || []} />
    </div>
  );
};
export default secondaryContainer;
