import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import './App.css'
import searchIcon from './search.svg'
const omdb_url = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_KEY}`

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async () => {
    const response = await fetch(`${omdb_url}&s=${searchTerm}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
   searchMovies(searchTerm);
  }, [searchTerm])
  return (
  <div className="app">
    <h1>MovieLand</h1>

    <div className="search">
      <input 
        placeholder = "Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={searchIcon}
        alt="search"
        onClick={() => {}}
      />
    </div>
    {
      movies?.length > 0 ? 
      (    
      <div className="container">
        {movies.map(movie => { return <MovieCard movie={movie}/>})}
      </div> 
      ): 
      (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )
    }
  </div>
  );
}

export default App;