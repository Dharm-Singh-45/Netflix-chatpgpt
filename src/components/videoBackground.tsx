import { RootState } from '../utils/appStore';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

export type Video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
  video: string;
};

const videoBackground = ({ movieId }: { movieId: number | undefined }) => {
  const trailerVideo = useSelector((store: RootState) => store.movies.trailerVideo);

  useMovieTrailer(movieId as number);

  return (
    <div className="w-screen aspect-video">
      <iframe
        width="w-screen aspect-video"
        height="full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=${trailerVideo?.key}&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full aspect-video"
      ></iframe>
    </div>
  );
};

export default videoBackground;
