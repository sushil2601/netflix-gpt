import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6'>
        <h1 className='text-lg py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    movies?.map((movie) => (
                        <MovieCard 
                            key={movie.id}
                            posterPath = {movie.poster_path}
                        />
                    ))
                }
            </div>
        </div>
        {/* <MovieCard posterPath = {movies[0].poster_path}/> */}
    </div>
  )
}

export default MovieList
