
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from "../Components/MainContainer";
import SecondaryContainer from "../Components/SecondaryContainer";
import usePopularMovies from '../Hooks/usePopularMovies';
import useTrandingMovies from '../Hooks/useTrandingMovies';
import useUpComingMovies from '../Hooks/useUpcomingMovies';



const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTrandingMovies();
 useUpComingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;