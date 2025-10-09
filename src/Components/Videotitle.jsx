import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className= "w-screen aspect-video  pt-75 px-12 absolute text-white bg-gradient-to-r from-black">
      
        <h2 className= "text-5xl font-bold">{title}</h2>
        <p className= "py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className= "bg-white text-black p-4 px-12 text-base rounded-lg hover:bg-gray-600 ">Play</button>
            <button className= " mx-2 bg-gray-500 text-white p-4 px-12 text-base rounded-lg hover:bg-gray-700">More Info</button>
        </div>
    </div>
  )
}

export default Videotitle;