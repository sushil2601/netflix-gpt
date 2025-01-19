import { use, useEffect } from "react"
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovie = () =>{

    const dispatch = useDispatch();

    const getPopularMovie = async() =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTION)

        const json = await data.json();

        console.log("json : -",json)

        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        getPopularMovie()
    },[])

}

export default usePopularMovie