import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video } from '../components/videoBackground';

// types.ts
type Movie = {
  id: number;
  original_title: string;
  overview: string;
  // Add more fields as needed from TMDB
};

type MovieState = {
  nowPlayingMovies: Movie[] | null;
  trailerVideo: Video | null;
};

const initialState: MovieState = {
  nowPlayingMovies: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action: PayloadAction<Video>) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
