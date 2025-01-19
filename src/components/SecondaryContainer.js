import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import MovieCard from './MovieCard'

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-52 pl-16 relative z-20'>
            <MovieList title = {"Now Playing"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"Trending"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"Popular"} movies= {movies.addPopularMovies}/>
            <MovieList title = {"Horror"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"BollyWood"} movies= {movies.nowPlayingMovies}/>
        </div>
      </div>
    )

  )
}

export default SecondaryContainer
