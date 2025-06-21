import { useEffect } from 'react';
import { Video } from '../components/videoBackground';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();

  // fetch movie video

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video: Video) => video.type === 'Trailer');

    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
