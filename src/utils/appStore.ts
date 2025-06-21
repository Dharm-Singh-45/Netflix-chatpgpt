import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.ts';
import moviesReducer from './moviesSlice.ts';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;
