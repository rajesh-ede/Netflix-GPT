import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './MovieSlice';
import userReducer from './userSlice';  // ✅ correctly imported
import gptReducer from './gptSlice';
import configReducer from './ConfigSlice'

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,  // 🎥 movie-related state
    user: userReducer,    // 👤 user-related state
    gpt : gptReducer,   
    config: configReducer,  
  },
});

export default appStore;
