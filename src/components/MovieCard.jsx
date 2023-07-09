import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import { MdDateRange } from "react-icons/md";

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}><img className="movie-poster" src={imageURL + movie.poster_path} alt={movie.title} /></Link>
      <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
      <p className="vote-average">
        <AiFillStar /> {movie.vote_average}
      </p>
      <p className="release-date">
        <MdDateRange /> {movie.release_date}
      </p>
    </div>
  );
}

export default MovieCard;