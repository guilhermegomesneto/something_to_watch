import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={imageURL + movie.poster_path} alt={movie.title} />
      <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
      <p className="vote-average">
        <AiFillStar /> {movie.vote_average}
      </p>
      <p className="release-date">
        {movie.release_date}
      </p>
    </div>
  );
}

export default MovieCard;