import React, { useEffect } from "react";

import './App.css'
import searchIcon from './search.svg'
const omdb_url = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_KEY}`

const movie1 = {
  "Title": "Shrek",
  "Year": "2001",
  "imdbID": "tt0126029",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${omdb_url}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
  }

  useEffect(() => {
   searchMovies(`Shrek`);
  }, [])
  return (
  <div className="app">
    <h1>MovieLand</h1>

    <div className="search">
      <input 
        placeholder = "Search for movies"
        value="Superman"
        onChange={() => {}}
      />
      <img
        src={searchIcon}
        alt="search"
        onClick={() => {}}
      />
    </div>

    <div className="container">
      <div className="movie">
        <div>
          <p>{movie1.Year}</p>
        </div>
        {/* this assumes a poster is defined for every result- which is not always the case
        <div>
          <img src={movie1.Poster} alt="poster"/>
        </div> 
        */}

        {/* instead we introduce a ternary */}
        <div>
          <img 
            src = { movie1.Poster !== 'N/A' ? movie1.Poster : 'http://via.placeholder.com/400' } 
            alt="poster"/>
        </div>

        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;