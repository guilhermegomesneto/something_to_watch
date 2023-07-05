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
        <h3>
          <Link to="/">Popular</Link>
        </h3>
        <div className="menu">
          <h3>
            <Link to="/">Top Rated</Link>
          </h3>
          <nav className="menu-dropdown">
            <Link to="/">Action</Link>
            <Link to="/">Animation</Link>
            <Link to="/">Comedy</Link>
            <Link to="/">Drama</Link>
            <Link to="/">Fantasy</Link>
            <Link to="/">Horror</Link>
            <Link to="/">Sci-Fi</Link>
          </nav>
        </div>
        <h3>
          <Link to="/">Upcoming</Link>
        </h3>
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