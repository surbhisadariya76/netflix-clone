import React from 'react'

function DashboardShimmerEffect() {
  return (
    <div className="sm:px-20 px-10 pb-9">
          <div className=" w-full relative p-4 aspect-[16/6]">
            <div className="w-full  aspect-[16/6] bg-gray-300 rounded-2xl"></div>
            <div className="w-5/12 absolute bottom-10 left-10 z-10  bg-gray-300 h-3/6 rounded-2xl"></div>
          </div>
          <div className="w-4/12 h-11 mx-3 rounded-2xl mb-4 mt-8 bg-gray-300"></div>
          <div className="flex gap-4 px-3">
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
          </div>
          <div className="w-4/12 h-11 mx-3 rounded-2xl mb-4 mt-8 bg-gray-300"></div>
          <div className="flex gap-4 px-3">
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
            <div className="h-80 w-3/12 rounded-2xl bg-gray-300"></div>
          </div>
        </div>
  )
}

export default DashboardShimmerEffect
