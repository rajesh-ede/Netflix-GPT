import React from 'react'
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-50 pl-12 relative z-10'>
    <Movielist title={"Now Playing"} movies = {movies.nowPlayingMovies} />
    <Movielist title={"Popular Movies"} movies = {movies.trandingMovies} />
    <Movielist title={"Tranding Movies"} movies = {movies.popularMovies} />
    <Movielist title={"Horror Movies"} movies = {movies.upcomingMovies} />
    </div>

    </div>
  )
}

export default SecondaryContainer;