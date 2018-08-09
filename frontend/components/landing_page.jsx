import React from "react";
import Footer from "./footer";
import MainGrid from "./main_grid";
import PrivacyModal from "./privacy_modal";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing_page">
        <MainGrid />

        <section className="links container-fluid">
          <div className="h5" href="#">
            <a href="#">
              <u>Area under the curve</u>
            </a>
          </div>
          <div className="h5" href="#">
            <a href="#">
              <u>Pharmacokinetics</u>
            </a>
          </div>
          <div className="h5" href="#">
            <a href="#">
              <u>Pharmacodynamics</u>
            </a>
          </div>
          <div className="h5" href="#">
            <a href="#">
              <u>Pharmacomet</u>
            </a>
          </div>
        </section>

        <Footer />

        <PrivacyModal />
      </div>
    );
  }
}

export default LandingPage;
