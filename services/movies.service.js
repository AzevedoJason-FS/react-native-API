import axios from "axios";
import authHeader from "./auth-header";

const getAllPrivateMovies = () => {
    return axios.get(`https://wdv-restful-api.herokuapp.com/api/v1/movies`, { headers: authHeader() })
}

const moviesService = {
    getAllPrivateMovies
}

export default moviesService;