import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Authentication, Image_Path, Movie_url } from "../utils/CenterData.js";
import BackAndSignOutHeader from "../BackAndSignOutHeader.js/BackAndSignOutHeader.js";
import ShimmerEffectForMovieDetails from "../ShimmerEffect/ShimmerEffectForMovieDetails.js";

function MovieDetails() {
  const [trailer, setTrailer] = useState();
  const [movieDetail, setMovieDetail] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    fetch(Movie_url + movieID, Authentication)
      .then((response) => response.json())
      .then((data) => setMovieDetail(data));
  }, [movieID]);

  useEffect(() => {
    fetch(`${Movie_url}${movieID}/videos?language=en-US`, Authentication)
      .then((response) => response.json())
      .then((response) => {
        setTrailer(response?.results);
      })

      .catch((err) => console.error(err));
  }, [movieID]);

  return (
    <div>
      {movieDetail === null ? (
        <ShimmerEffectForMovieDetails/>
      ) : (
        <>
          <BackAndSignOutHeader trailer={trailer} />
          <div className="bg-[#EEEEEE]  text-[#373A40]   sm:px-20 px-10 pb-9">
         
            <div className="">
              <div className="flex gap-5 border-2 p-4 w-full">
                {trailer && (
                  <div className=" w-full border-2  rounded-xl overflow-hidden ">
                    <iframe
                      className=" w-full aspect-video"
                      src={`https://www.youtube.com/embed/${trailer[0]?.key}?autoplay=0&play&controls=1`}
                      frameborder="0"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                )}
              </div>

              <div className="border-2 p-4 flex">
                <div className="w-3/12 rounded-xl border-2 overflow-hidden">
                  <img
                    className="h-full w-full object-center  object-cover"
                    src={`${Image_Path}${movieDetail.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="w-9/12 ms-4">
                  <div>
                    <div className=" px-4 ">
                      <h1 className="text-5xl font-bold">
                        {movieDetail.title}
                      </h1>
                    </div>
                    <div className=" flex justify-between px-4">
                      <div>
                        <h6 className=" font-semibold  my-1.5 text-[18px] ">
                          {movieDetail.tagline}
                        </h6>
                        <h6 className=" font-semibold  my-1.5 text-[15px]">
                          {movieDetail.release_date.slice(0, 4) +
                            " - " +
                            Math.floor(movieDetail.runtime / 60) +
                            "hr " +
                            (movieDetail.runtime % 60) +
                            "mins"}
                        </h6>
                        <div className="my-3 -mx-1">
                          {movieDetail.genres.map((genre) => {
                            return (
                              <span className="border border-gray-500 px-2  py-1 text-[15px]  mx-1 text-gray-700 rounded-full ">
                                {genre.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <h6 className="mt-2 font-semibold">
                          <i className="fa-solid fa-star text-yellow-600 me-1"></i>{" "}
                          {movieDetail.vote_average}
                        </h6>

                        <h6 className="mt-2 font-semibold">
                          {" "}
                          <i class="fa-solid fa-check-to-slot me-2 text-blue-700"></i>
                          {movieDetail.vote_count}
                        </h6>

                        <h6 className="mt-2 font-semibold ">
                          <i class="fa-solid fa-fire me-2 text-green-800"></i>
                          {movieDetail.popularity}
                        </h6>
                      </div>
                    </div>
                    <div className=" mt-2 px-3">
                      <div className="">
                        <p className="leading-6   my-3 ">
                          {movieDetail.overview}
                        </p>
                        <div>
                          <div className="text-blue-700">
                            <span className="me-1 text-[#686D76] font-bold">
                              Budget:{" "}
                            </span>
                            <i className="fa-solid fa-dollar-sign me-1"></i>
                            {movieDetail.budget / 1000000} Million
                          </div>
                          <div className="text-blue-700">
                            <span className="me-1 text-[#686D76] font-bold">
                              Box office:{" "}
                            </span>
                            <i className="fa-solid fa-dollar-sign me-1 "></i>
                            {movieDetail.revenue / 1000000} Million
                          </div>
                        </div>
                      </div>
                      <div className="flex  gap-6  flex-wrap">
                        <p className="text-start   w-full font-bold text-xl mt-3  mx-auto">
                          Production Countries
                        </p>
                        {movieDetail?.production_companies.map((company) => {
                          return (
                            <>
                              <div className="flex items-center flex-col ">
                                <div className="w-12 p-0.5 h-12 border rounded-full overflow-hidden  bg-white  ">
                                  <img
                                    className="h-full w-full object-contain object-center"
                                    src={
                                      company.logo_path
                                        ? Image_Path + company.logo_path
                                        : "/images/movie-film.webp"
                                    }
                                    alt="company_logo"
                                  />
                                </div>
                                <p className="text-black">{company.name}</p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex border-2 p-4 w-full box-border flex-wrap justify-start">
                <h1 className="w-full text-3xl font-bold mb-3">Videos </h1>
                {trailer &&
                  trailer?.map((trailer) => {
                    return (
                      <div className="p-4  w-4/12  flex-shrink-0 ">
                        <div className="rounded-xl overflow-hidden ">
                          <iframe
                            className=" w-full aspect-video"
                            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=0&play&controls=1`}
                            frameborder="0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
