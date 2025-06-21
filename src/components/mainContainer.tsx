import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import VideoBackground from './videoBackground';
import VideoTitle from './videoTitle';

const mainContainer = () => {
  const movies = useSelector((store: RootState) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies?.[0];

  const { original_title, overview } = mainMovie;
  return (
    <div className="w-full">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default mainContainer;
