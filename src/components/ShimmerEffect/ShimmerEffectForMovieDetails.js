import React from "react";

function ShimmerEffectForMovieDetails() {
  return (
    <div className="sm:px-20 px-10 pb-9">
      <div className=" w-full p-4">
        <div className="w-full  aspect-[16/6] bg-gray-500 rounded-2xl"></div>
      </div>
      <div className=" p-4 flex ">
        <div className="w-3/12 rounded-xl  bg-gray-500"></div>
        <div className="w-9/12 ms-4 h-full rounded-xl  ">
          <div className="h-14 rounded-lg w-6/12 my-1.5 bg-gray-500"></div>
          <div className="h-8 rounded-lg w-6/12 my-1.5 bg-gray-500"></div>
          <div className="h-24 rounded-lg my-1.5 bg-gray-500"></div>
          <div className="flex gap-11 mt-3">
            <div className="w-16 h-16 rounded-full bg-gray-500"></div>
            <div className="w-16 h-16 rounded-full bg-gray-500"></div>
            <div className="w-16 h-16 rounded-full bg-gray-500"></div>
            <div className="w-16 h-16 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerEffectForMovieDetails;
