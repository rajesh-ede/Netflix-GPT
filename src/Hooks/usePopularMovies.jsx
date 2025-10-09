import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  addPopularMovies } from '../Components/Utils/MovieSlice';
import { API_OPTIONS } from "../Components/Utils/Constants";

const usePopularMovies = () => {
 const dispatch = useDispatch();
  const getPopularMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
  const json = await data.json();
       console.log("Fetched movies:", json.results);

  dispatch(addPopularMovies(json.results));
  };

  useEffect(() =>{
    getPopularMovies();
  },[])
}

export default usePopularMovies;