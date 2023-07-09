import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API_MOVIE;
const tmdbKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
  
    setMovie(data);
  }

  useEffect(() => {
    const pageURL = `${moviesURL}${id}?${tmdbKey}`;
    getMovie(pageURL);
  }, [])

  return (
    <div>
      {movie && (
        <>
          <div className="movie-content">
            <div className="movie-img">
              <img className="poster" src={imageURL + movie.poster_path} alt={movie.title} />
            </div>

            <div className="movie-info">
              <h1 className="main-title">{movie.title}</h1>

              <h3 className="sub-title"><AiFillStar /> Rating</h3>

              <p className="text">
                {movie.vote_average}
              </p>

              <h3 className="sub-title"><MdLanguage /> Original Language</h3>

              <p className="text">
                {movie.original_language}
              </p>

              <h3 className="sub-title"><MdDateRange /> Release Date</h3>

              <p className="text">
                {movie.release_date}
              </p>

              <h3 className="sub-title"><BsHourglassSplit /> Running Time</h3>

              <p className="text">
                {movie.runtime} minutes
              </p>

              <h3 className="sub-title"><BsFillFileEarmarkTextFill /> Overview</h3>

              <p className="text">
                {movie.overview}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
  
export default Movie;