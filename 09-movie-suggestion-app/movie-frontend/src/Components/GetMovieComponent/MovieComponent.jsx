import React from 'react'

const MovieComponent = ({movie}) => {
  return (
    <div className='card'>
    <div className="text-container">
    <h3>{movie.movieName}</h3>
    <p className='status'> {movie.movieYear}</p>
    <p className='status'> {movie.movieGenre1}</p>
    <p className='status'> {movie.movieGenre2}</p>
    <p className='status'> {movie.imdbRating}</p>

    </div>
  </div>
  )
}

export default MovieComponent