import { createSlice } from "@reduxjs/toolkit";

const NowPlayingMovieSlice = createSlice({
  name: "Now Playing Movies",
  initialState: {
    movies: null,
  },
  reducers: {
    NowPlayingMovie: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { NowPlayingMovie } = NowPlayingMovieSlice.actions;
export default NowPlayingMovieSlice.reducer;
