import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-xl navbar-dark sticky-top">
        <div className="nav-container">
          <a className="navbar-brand" href="#">
            <img className="logo" src="xlCurves_r_small.png" />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Examples
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
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
