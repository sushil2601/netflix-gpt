import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";


const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();

    const getMovieVideos = async() =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTION)
        const json = await data.json();


        const filteredData = json.results.filter((video)=> video.type === 'Trailer')
        const trailer = filteredData.length ? filteredData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));

    }

    useEffect(()=>{
        getMovieVideos();
    },[])

}

export default useMovieTrailer;