import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }: { posterPath: string }) => {
  return (
    <div className="w-48 rounded-lg">
      <img src={IMG_CDN_URL + posterPath} alt="movie-card" className=" " />
    </div>
  );
};

export default MovieCard;
