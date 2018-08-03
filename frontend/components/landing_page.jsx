import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';


class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing_page'>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
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
          <button type="button" className="btn btn-outline-danger">Buy</button>
        </nav>
        <a className='logo-a'>
          <img className='logo' src='xlCurves_s.png' ></img>
        </a>

        <h1 className='welcome'>Welcome to xlCurves</h1>
      </div>
    );
  }
}

export default LandingPage;

// <ul className="navbar-nav mr-auto">
//   <li className="nav-item active">
//     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="#">Link</a>
//   </li>
//   <li className="nav-item dropdown">
//     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       Dropdown
//     </a>
//     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//       <a className="dropdown-item" href="#">Action</a>
//       <a className="dropdown-item" href="#">Another action</a>
//       <div className="dropdown-divider"></div>
//       <a className="dropdown-item" href="#">Something else here</a>
//     </div>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link disabled" href="#">Disabled</a>
//   </li>
// </ul>
