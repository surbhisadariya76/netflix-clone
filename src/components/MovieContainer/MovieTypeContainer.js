import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard.js";

function MovieTypeContainer({ movies, title }) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-white py-4">{title}</h1>

      <div
        ref={sliderRef}
        className="flex w-full overflow-x-scroll [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDragging}
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} title={title} />
        ))}
      </div>
    </>
  );
}

export default MovieTypeContainer;
