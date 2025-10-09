import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './MovieSlice';
import userReducer from './userSlice';  // ✅ correctly imported

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,  // 🎥 movie-related state
    user: userReducer,      // 👤 user-related state
  },
});

export default appStore;
