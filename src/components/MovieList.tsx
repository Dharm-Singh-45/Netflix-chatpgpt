import React from 'react';
import { Movie } from '../utils/moviesSlice';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }: { title: string; movies: Movie[] }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-4">
          {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
