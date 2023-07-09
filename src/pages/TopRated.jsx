import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API_MOVIE;
const tmdbKey = import.meta.env.VITE_API_KEY;

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  }

  const getGenres = async () => {
    const genresURL = `https://api.themoviedb.org/3/genre/movie/list?${tmdbKey}`;
    const res = await fetch(genresURL);
    const data = await res.json();

    setGenres(data.genres);
  }

  const handleGenreChange = (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);
  }

  useEffect(() => {
    const pageURL = `${moviesURL}top_rated?${tmdbKey}`;

    getMovies(pageURL);
    getGenres();
  }, [])

  useEffect(() => {
    let pageURL = `${moviesURL}top_rated?${tmdbKey}`;

    if (selectedGenre) {
      pageURL += `&with_genres=${selectedGenre}`;
    }

    getMovies(pageURL);
  }, [selectedGenre])

  return (
    <div className="container">
      <h2 className="title">Top Rated Movies</h2>

      <div className="filter">
        {genres.length > 0 && (
            <select className="genre-select" value={selectedGenre} onChange={handleGenreChange}>
            <option value="">All Genres</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
            </select>
        )}
      </div>

      <div className="movies-container">
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default TopRated;