import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {   addTrandingMovies } from '../Components/Utils/MovieSlice';
import { API_OPTIONS } from "../Components/Utils/Constants";

const useTrandingMovies = () => {
 const dispatch = useDispatch();
  const getTrandingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
  const json = await data.json();
       console.log("Fetched movies:", json.results);

  dispatch(addTrandingMovies(json.results));
  };

  useEffect(() =>{
    getTrandingMovies();
  },[])
}

export default useTrandingMovies;
