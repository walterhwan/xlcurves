import React from "react";
import Functions from "./functions";
// import Links from "./links";

class LandingPage extends React.Component {
  render() {
    return (
      <section className="landing-page">
        <div className="about-xlcurves">
          <div className="main-dpt">
            <h1 className="title">xlCurves for Microsoft Excel</h1>
            <p className="h5">
              Add area under the curve functions to Microsoft Excel's Function
              Wizard
            </p>
            <hr className="my-4" />
            <div className="btn-group">
              <div>
                <a className="btn btn-success" href="#" role="button">
                  Tell me more
                </a>
              </div>
              <div className="privacy-policy">
                <a data-toggle="modal" data-target="#privacyModal" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div
            className="carousel slide"
            id="carouselExampleIndicators"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-640"
                  src="slide1.svg"
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-640"
                  src="slide2.svg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <Functions />
      </section>
    );
  }
}

export default LandingPage;
