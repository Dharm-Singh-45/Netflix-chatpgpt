import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video } from '../components/videoBackground';

// types.ts
export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  // Add more fields as needed from TMDB
};

type MovieState = {
  nowPlayingMovies: Movie[] | null;
  trailerVideo: Video | null;
  popularMovies: Movie[] | null;
};

const initialState: MovieState = {
  nowPlayingMovies: null,
  trailerVideo: null,
  popularMovies: null,
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
    addPopularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
