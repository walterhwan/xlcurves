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
            <u>Area under the curve</u>
          </div>
          <div className="h5" href="#">
            <u>Pharmacokinetics</u>
          </div>
          <div className="h5" href="#">
            <u>Pharmacodynamics</u>
          </div>
          <div className="h5" href="#">
            <u>Pharmacomet</u>
          </div>
        </section>

        <Footer />

        <PrivacyModal />
      </div>
    );
  }
}

export default LandingPage;
