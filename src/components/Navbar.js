import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            {props.title}
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

// setting props types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Your Title Here...",
  home: "Your Home Here...",
  about: "Your About Here...",
};
export default Navbar;
