
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from "../Components/MainContainer";
import SecondaryContainer from "../Components/SecondaryContainer";
import usePopularMovies from '../Hooks/usePopularMovies';
import useTrandingMovies from '../Hooks/useTrandingMovies';
import useUpComingMovies from '../Hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
 const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 console.log("showGptSearch:", showGptSearch);
 useNowPlayingMovies();
 usePopularMovies();
 useTrandingMovies();
 useUpComingMovies();
 return (
  <div className="relative">
    <Header />
    {!showGptSearch && (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}
    {showGptSearch && <GPTSearch />}
  </div>
);

}

export default Browse;