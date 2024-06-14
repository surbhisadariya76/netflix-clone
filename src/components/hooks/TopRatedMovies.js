import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Authentication, Movie_url } from '../utils/CenterData.js';
import {TopRatedMovies} from '../StoreSlices/TopRatedMovies.js';

function PopularMoviesData() {
  
const dispatch = useDispatch()

useEffect(() => {
    fetch(Movie_url +"top_rated", Authentication)
    .then(response => response.json())
    .then(data => dispatch(TopRatedMovies(data.results)))
   
}, [dispatch]);

}
export default PopularMoviesData
