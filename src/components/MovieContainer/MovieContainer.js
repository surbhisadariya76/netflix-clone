import React from "react";
import MovieTypeContainer from "./MovieTypeContainer.js";
import { useSelector } from "react-redux";

export default function MovieContainer() {
  
  const Popularmovies = useSelector((store) => store.popular.movies);
  const NowPlayingMovies = useSelector((store) => store.nowPlaying.movies);
  const TopRatedMovies = useSelector((store) => store.TopMovies.movies);
  const UpComingMovies = useSelector((store)=>store.popular.upComing)

  return (
    <div div className="px-10 bg-black ">
      <MovieTypeContainer movies={Popularmovies} title={"Popular Movies"} />
      <MovieTypeContainer movies={NowPlayingMovies} title={"Now Playing Movies "} />
      <MovieTypeContainer movies={TopRatedMovies} title={"Top Rated Movies"} />
      <MovieTypeContainer movies={UpComingMovies} title={"Up Coming Movies"} />
    </div>
  );
}
