import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './mainContainer';
import SecondaryContainer from './secondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="w-full ">
      <Header />
      {/* main container 
        - video background
        - title
      */}
      <MainContainer />

      {/* secondary container 
        - movie lists * N
        - movie cards * N
      */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
