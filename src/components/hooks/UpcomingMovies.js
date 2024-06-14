import { useEffect } from 'react'
import { Authentication } from '../utils/CenterData.js';
import { Axios } from '../Axios/Axios.js';
import { useDispatch } from 'react-redux';
import { UpComingMovies } from '../StoreSlices/PopularMovies.js';

function UpcomingMovies() {
  const dispatch =  useDispatch()

useEffect(() => {
    
   const UpcomingMovies = async() => {
    try {
        let response =await Axios.get( "/upcoming", Authentication)
        dispatch(UpComingMovies(response?.data?.results))

    } catch (error) {
        console.log(error)
    }
   }
   
   UpcomingMovies();
}, [dispatch]);
}

export default UpcomingMovies
