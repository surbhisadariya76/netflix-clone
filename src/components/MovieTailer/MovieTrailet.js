import React, { useEffect, useState } from "react";
import { Authentication, Movie_url } from "../utils/CenterData.js";
import { useSelector } from "react-redux";

function MovieTrailet() {
  const [trailer, setTrailer] = useState(null);
  const [slider, setslider] = useState(0);

  const movies = useSelector((store) => store.nowPlaying.movies);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setslider(movies?.length - 1 > slider ? slider + 1 : 0);
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, [movies, slider ]);

  useEffect(() => {
    if (movies?.length > 0) {
      const movieId = movies[slider]?.id;
      fetch(`${Movie_url}${movieId}/videos?language=en-US`, Authentication)
        .then((response) => response.json())
        .then((response) => setTrailer(response))
        .catch((err) => console.error(err));
    }
  }, [slider, movies]);

  const currentMovie = movies[slider] || {};
  const { title, overview } = currentMovie;

  return (
   
    <>
      <div className="w-full max-w-screen-2xl mx-auto  aspect-[16/7] z-10 bg-gradient-to-r from-black p-20 text-white absolute ">
        <div className="w-4/12 absolute bottom-16">
          <h1 className="text-5xl font-bold my-4">{title ? title : ""}</h1>
          <div className="flex">
            <button className=" my-5 me-4 py-1.5 px-5 rounded-md bg-gray-500 bg-opacity-35 flex items-center">
              <i className="fa-solid fa-play me-3"></i> Play
            </button>
            <button className=" my-5 me-4 py-1.5 px-5 rounded-md bg-gray-500 bg-opacity-35 flex items-center">
              <i className="fa-solid fa-plus me-3"></i>My List
            </button>
          </div>
          <p className="line-clamp-3">{overview || ""}</p>
        </div>
      </div>
      <iframe
        className=" w-full aspect-[16/7] max-w-screen-2xl"
        src={`https://www.youtube.com/embed/${trailer?.results[0]?.key}?autoplay=1&playlist=${trailer?.results[0]?.key}&&loop=1&mute=1&controls=0`}
        frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default MovieTrailet;
