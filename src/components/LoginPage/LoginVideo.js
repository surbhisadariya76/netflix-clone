import React from "react";

export default function LoginVideo({ srcImg, srcVideo, loading }) {

  return (
    <>
      <div className="w-6/12 h-full relative ">
        {srcVideo && (
          <div className="w-full h-full p-[13%] flex items-center justify-center">
            <video
              className=" w-full h-auto"
              src={srcVideo}
              autoPlay
              muted
              loop
            ></video>
          </div>
        )}

        <div className="absolute w-full h-full top-0 flex justify-center items-center flex-col ">
          <div className="w-full">
            <img className="" src={srcImg} alt="TvImage" />
          </div>
          {loading && (
            <div className="w-7/12 mx-auto h-24 absolute border-2 justify-around items-center border-gray-500 bg-black bottom-[15%] rounded-xl p-3 flex">
              <div className="h-full">
                <img
                  className="h-full w-auto"
                  src="./images/boxshot.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold ">Stranger Things</p>
                <p className="text-blue-700">Downloading...</p>
              </div>
              <div className="w-2/12">
                <img
                  className="w-full"
                  src="./images/download-icon-gif.gif"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="App">
        <div className="video-container">
          <video ref={videoRef} src={videoSrc} width="600" controls>
            <source type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="controls">
            <button onClick={() => skip(-10)}>⏪&nbsp;&nbsp;&nbsp;</button>
            <button onClick={togglePlay}>{isPlaying ? "⏸️" : "▶️"}</button>
            <button onClick={() => skip(10)}>&nbsp;&nbsp;&nbsp;⏩</button>
            <button onClick={download}>&nbsp;&nbsp;&nbsp; ⬇️</button>
          </div>
        </div>
      </div> */}

      {/* <video
              className=" w-full h-auto"
              src="/videos/videoplayback.mp4"
              controls="true"
        
            ></video> */}
    </>
  );
}
