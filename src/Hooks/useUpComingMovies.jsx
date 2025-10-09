import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {   addTrandingMovies, addUpComingMovies } from '../Components/Utils/MovieSlice';
import { API_OPTIONS } from "../Components/Utils/Constants";

const useUpComingMovies = () => {
 const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
  const json = await data.json();
       console.log("Fetched movies:", json.results);

  dispatch(addUpComingMovies(json.results));
  };

  useEffect(() =>{
    getUpcomingMovies();
  },[])
}

export default useUpComingMovies;