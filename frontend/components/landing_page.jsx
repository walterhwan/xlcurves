import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import Footer from './footer';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing_page'>
        <NavBar />

        <section className="main container-fluid">
          <div className="content row">
            <div className="jumbotron col-12 col-md-6">
              <h1 className="title">xlCurves for Microsoft Excel</h1>
              <p className="h5">Add area under the curve functions to Microsoft Excel's Function Wizard</p>
              <hr className="my-4" />
              <div className="btn-group">
                <div><a className="btn btn-success" href="#" role="button">Tell me more</a></div>
                <div><a className="privacy-policy" href="#">Privacy Policy</a></div>
              </div>
            </div>
            <div className="carousel slide col-12 col-md-6" id="carouselExampleIndicators" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="slide1.svg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="slide2.svg" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </div>
        </section>

        <section className="links container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12 h5" href="#"><u>Area under the curve</u></div>
            <div className="col-md-3 col-sm-6 col-12 h5" href="#"><u>Pharmacokinetics</u></div>
            <div className="col-md-3 col-sm-6 col-12 h5" href="#"><u>Pharmacodynamics</u></div>
            <div className="col-md-3 col-sm-6 col-12 h5" href="#"><u>Pharmacomet</u></div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default LandingPage;
