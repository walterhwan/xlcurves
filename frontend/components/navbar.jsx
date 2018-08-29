import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-xl navbar-dark sticky-top">
        <div className="nav-container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="xlCurves_r_small.png" />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                What is xClurves
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Examples
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Support
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
          </ul>
          <button
            className="btn btn-outline-light"
            type="button"
            data-toggle="modal"
            data-target="#privacyModal"
          >
            Privacy Policy
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
