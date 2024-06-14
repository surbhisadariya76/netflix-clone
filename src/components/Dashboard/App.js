import { useEffect, useState } from "react";
import { Authentication, Movie_url } from "../utils/CenterData.js";
import MovieTrailet from "../MovieTailer/MovieTrailet.js";
import { useDispatch } from "react-redux";
import { NowPlayingMovie } from "../StoreSlices/NowPlayingMovies.js";
import PopularMoviesData from "../hooks/PopularMoviesData.js";
import MovieContainer from "../MovieContainer/MovieContainer.js";
import TopRatedMovies from "../hooks/TopRatedMovies.js";
import BackAndSignOutHeader from "../BackAndSignOutHeader.js/BackAndSignOutHeader.js";
import DashboardShimmerEffect from "../ShimmerEffect/DashboardShimmerEffect.js";
import UpcomingMovies from "../hooks/UpcomingMovies.js";
import SearchMovies from "../hooks/SearchMovie.js";

function App() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(Movie_url + "now_playing", Authentication)
      // fetch("https://api.themoviedb.org/3/movie/now_playing", Authentication)
      .then((response) => response.json())
      .then((data) => {
        setNowPlaying(data);
        dispatch(NowPlayingMovie(data?.results));
      })

      .catch((err) => console.error(err));
  }, [dispatch]);

  PopularMoviesData();
  TopRatedMovies();
  UpcomingMovies();
  SearchMovies()

  return (
    <>
      {nowPlaying ? (
        <>
          <BackAndSignOutHeader />
          <div className="flex  bg-black flex-col items-start">
            <MovieTrailet />
          </div>
          <MovieContainer />
        </>
      ) : (
        <DashboardShimmerEffect />
      )}
    </>
  );
}

export default App;
