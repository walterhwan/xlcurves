import React from "react";
import Footer from "./footer";
import MainGrid from "./main_grid";
import PrivacyModal from "./privacy_modal";

class LandingPage extends React.Component {
  render() {
    let links = [
      "Area under the curve",
      "Pharmacokinetics",
      "Pharmacodynamics",
      "Pharmacometrics",
      "No-compartmental Analysis",
      "Superposition",
      "YMAX",
      "XMAX",
      "LAMDA",
      "HALFLIFE",
      "AUC",
      "AUCINF",
      "AUMC",
      "AUMCINF",
      "YVALUE",
      "YVALING"
    ];
    return (
      <div className="landing_page">
        <MainGrid />

        <section className="links">
          <div className="links-container">
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
                <u>Pharmacometrics</u>
              </a>
            </div>
          </div>
        </section>

        <Footer />

        <PrivacyModal />
      </div>
    );
  }
}

export default LandingPage;
