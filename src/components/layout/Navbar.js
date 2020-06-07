import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <FaGithub className="icon" />
      <h1>{props.title}</h1>
      <ul className="nav-navbar">
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">
            About
          </Link>
        </li>
        {/* <li>
          <Link to="#" className="nav-links">
            Support
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GITHUB FINDER",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
