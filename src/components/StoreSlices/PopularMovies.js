import { createSlice } from "@reduxjs/toolkit";

const PopularMoviesSlice = createSlice({
  name: "Popular Movies",
  initialState: {
    movies: null,
    upComing: null,
  },
  reducers: {
    popularmovies: (state, action) => {
      state.movies = action.payload;
    },
    UpComingMovies: (state, action) => {
      state.upComing = action.payload;
    },
  },
});
export const { popularmovies, UpComingMovies } = PopularMoviesSlice.actions;

export default PopularMoviesSlice.reducer;
