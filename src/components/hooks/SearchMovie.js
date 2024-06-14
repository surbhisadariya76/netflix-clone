import axios from "axios";
import { useEffect } from "react";
import { Authentication } from "../utils/CenterData.js";

export default function SearchMovies(){

useEffect(()=>{

    const SearchResult = async()=>{
        try {
            const response = await axios.get("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=godfather", Authentication)
        console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    SearchResult()
},[])


}