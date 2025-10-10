import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { B_G_URL } from './Utils/Constants'

const GPTSearch = () => {
  return (
    <div className=''>
      
        <div className='absolute -z-10'>
            <img src={B_G_URL} alt="logo" />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch