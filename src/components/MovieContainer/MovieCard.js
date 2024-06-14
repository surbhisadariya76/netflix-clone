import React from "react";
import { Image_Path } from "../utils/CenterData.js";
import { Link } from "react-router-dom";

function MovieCard({ movie, title }) {
  return (
    <Link to={`/dashboard/${title}/${movie.id}`} state={movie}>
      <div
        className="w-60 flex-shrink-0 mx-2 rounded-lg relative group overflow-hidden"
      >
        <img
          className="w-full h-auto"
          src={Image_Path + movie.poster_path}
          alt="Movie Card"
        />
        <div className="w-full flex flex-col justify-center items-center h-full bg-gray-500 bg-opacity-50 overflow-hidden text-white p-5 absolute top-0 left-full transition duration-1000 ease-in-out transform group-hover:-translate-x-full">
          <h1 className="font-bold text-xl mb-3 leading-6  text-center">
            {movie?.title}
          </h1>
          <p className="leading-4 text-center ">{movie?.overview}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
