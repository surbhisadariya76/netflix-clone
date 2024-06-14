import { createSlice } from "@reduxjs/toolkit";

const TopRatedMoviesSlice = createSlice({
    name : "Top Rated Movies",
    initialState:{
        movies:null
    },
    reducers:{
        TopRatedMovies: (state, action)=>{
            state.movies = action.payload
        }
    }
})

export const { TopRatedMovies } = TopRatedMoviesSlice.actions
export default TopRatedMoviesSlice.reducer