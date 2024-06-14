import axios from "axios";
import { Movie_url } from "../utils/CenterData.js";

export const Axios = axios.create({
    baseURL: Movie_url
})
