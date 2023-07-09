import { Link } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
        <h2>
          <Link to="/"><BiMoviePlay /> Something to Watch</Link>
        </h2>

        <p>
            &copy; Copyright - 2023
        </p>

        <p>
            Something to Watch uses the TMDb API but is not endorsed or certified by TMDb
        </p>
    </div>
  );
}

export default Footer;