
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'


const VideoBackGround = ({movieId}) => {
  const trailerVedio = useSelector(store =>store.movies?.trailerVedio);

    useMovieTrailer(movieId);
 
  return (
    <div className='w-screen'>
        <iframe
          className='w-screen aspect-video'
        
         src={"https://www.youtube.com/embed/6paP2-ry-QY?si=" + trailerVedio?.key + "?&autoplay=1&mute=1"}      

         title="YouTube video player"  
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackGround