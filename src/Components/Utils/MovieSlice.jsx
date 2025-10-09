import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
     name : "movies",
     initialState : {
        nowPlayingMovies: null,
        popularMovies:null,
        trandingMovies:null,
        upcomingMovies: null,
        trailerVideo : null,
     },
     reducers : {
        addNowPlayingMovies : (state, action) =>{
         state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) =>{
         state.popularMovies = action.payload;
        },
         addTrandingMovies : (state, action) =>{
         state.trandingMovies = action.payload;
        },
        addUpComingMovies : (state, action) =>{
         state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
         state.trailerVideo = action.payload;
        }
     }
     
})
export default MovieSlice.reducer;

export const { addNowPlayingMovies , addTrailerVideo, addPopularMovies,addTrandingMovies,addUpComingMovies} = MovieSlice.actions;


