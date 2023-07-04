import { Link } from "react-router-dom"
import { BiMoviePlay, BiSearchAlt2 } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiMoviePlay /> Something to Watch</Link>
        </h2>
        <form>
          <input type="text" placeholder="Search for something" />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
  )
}

export default Navbar