import React from 'react'
import MovieCards from './MovieCards'

const Movielist = ({ title, movies }) => {
  return (
    <div className='px-1 '>
      <h2 className='text-3xl py-1 text-white'>{title}</h2>
      <div className='flex overflow-x-scroll '>
        <div className='flex space-x-2 ' >
          {Array.isArray(movies) ? (
            movies.map((movie) => (
              <MovieCards key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Movielist
