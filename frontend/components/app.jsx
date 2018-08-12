import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from "./landing_page";
import NavBar from "./navbar";
import Footer from "./footer";
import PrivacyModal from "./privacy_modal";
import Test from "./test";

const App = () => (
  <div className="app">
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/grid" component={Test} />
      <Route component={PageNotFound} />
    </Switch>
    <Switch>
      <Route exact path="/" component={Links} />
    </Switch>
    <Footer />
    <PrivacyModal />
  </div>
);

const Links = () => (
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
);

const PageNotFound = () => (
  <div className="page-not-found">
    <div id="clouds">
      <div className="cloud x1" />
      <div className="cloud x1_5" />
      <div className="cloud x2" />
      <div className="cloud x3" />
      <div className="cloud x4" />
      <div className="cloud x5" />
    </div>
    <div className="_404-page">
      <div className="_404">404</div>
      <hr />
      <div className="_1">THE PAGE</div>
      <div className="_2">WAS NOT FOUND</div>
      <a className="btn" href="#">
        BACK TO HOME
      </a>
    </div>
  </div>
);

export default App;
