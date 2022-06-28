import React from 'react'


const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      {/* this assumes a poster is defined for every result- which is not always the case
      <div>
        <img src={movie.Poster} alt="poster"/>
      </div> 
      */}

      {/* instead we introduce a ternary */}
      <div>
        <img 
          src = { movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } 
          alt="poster"/>
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;