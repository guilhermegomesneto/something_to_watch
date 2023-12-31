import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMoviePlay, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiMoviePlay /> Something to Watch</Link>
        </h2>
        <div className="pages">
          <h3>
            <Link to="trending">Trending</Link>
          </h3>
          <h3>
            <Link to="top-rated">Top Rated</Link>
          </h3>
          <h3>
            <Link to="upcoming">Upcoming</Link>
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)} value={search} />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
    </nav>
  );
}

export default Navbar;