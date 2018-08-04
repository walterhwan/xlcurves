import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing_page'>
        <NavBar />

        <div className="first-section">
          <a className='logo-a'>
            <img className='logo' src='xlCurves_s.png' ></img>
          </a>
          <h1 className="one-liner">One liner to describe xlCurves</h1>
          <div className="button-group">
            <button type="button" className="btn btn-outline-danger btn-lg">Download</button>
            <button type="button" className="btn btn-outline-primary btn-lg">Take a Tour</button>
          </div>
        </div>

        <div className="second-section container-fluid">
          <div className="jumbotron col-4">
            <h1 className="display-4 pb-3">Title</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
          <div className="right-pic-div col-8 p-3">
            <img src="https://i.imgur.com/0LE4749.png" className="img-fluid" alt="Responsive image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
