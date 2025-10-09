import React from 'react'
import { IMG_CDN_URL } from './Utils/Constants'

const MovieCards = ({posterPath}) => {
  return (
    <div className='w-44 mr-2 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-2'>
        <img alt="Movie Cards" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCards