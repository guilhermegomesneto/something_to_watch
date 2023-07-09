import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API_TRENDING;
const tmdbKey = import.meta.env.VITE_API_KEY;

const Trending = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
  
      setMovies(data.results);
    }
  
    useEffect(() => {
      const pageURL = `${moviesURL}?${tmdbKey}`;
  
      getMovies(pageURL);
    }, [])
  
    return (
      <div className="container">
        <h2 className="title">Trending Movies</h2>
        <div className="movies-container">
          {movies.length === 0 && <p>Loading...</p>}
          {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
}

export default Trending;