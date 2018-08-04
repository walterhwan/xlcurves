import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="#">xlCurves</a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Learn<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Examples</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Support</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Features
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <button type="button" className="btn btn-danger">Download</button>
      </nav>
    );
  }
}

export default NavBar;