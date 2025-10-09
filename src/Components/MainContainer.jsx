import React from 'react';
import { useSelector } from 'react-redux';
import Videotitle from "../Components/Videotitle";
import VideoBackGround from "../Components/VideoBackGround";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
     console.log("Movies from Redux store:", movies);

    // ✅ Proper check for data existence and content
    if (!movies || movies.length === 0) {
        return <div>Loading or No Movies Found</div>; // fallback UI
    }
    
    const mainMovie = movies[0];

    // Also handle undefined just in case
    if (!mainMovie) return <div>No Main Movie Found</div>;

    const { original_title, overview , id} = mainMovie;
    
    return (
        <div>
            <Videotitle  title={original_title} overview={overview} />
            <VideoBackGround movieId={id} />
            

        </div>
    );
};

export default MainContainer;
