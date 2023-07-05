import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"

const moviesURL = import.meta.env.VITE_API_MOVIE;
const tmdbKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  const getNowPlayingMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setNowPlaying(data.results);
  }

  useEffect(() => {
    const nowPlayingURL = `${moviesURL}now_playing?${tmdbKey}`;

    getNowPlayingMovies(nowPlayingURL);
  }, [])

  return (
    <div className="container">
      <h2 className="title">Movies in Theaters Now</h2>
      <div className="movies-container">
        {nowPlaying.length === 0 && <p>Loading...</p>}
        {nowPlaying.length > 0 && nowPlaying.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Home;