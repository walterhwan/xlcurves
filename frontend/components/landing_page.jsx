import React from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing_page'>
        <a className='logo'></a>
        <h1 className='welcome'>Welcome to xlcurves</h1>
      </div>
    );
  }
}

export default LandingPage;
