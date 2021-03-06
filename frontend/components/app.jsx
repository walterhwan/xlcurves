import React from "react";
import { Route, Switch } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from "./landing_page";
import NavBar from "./navbar";
import Footer from "./footer";
import PrivacyModal from "./privacy_modal";
import About from "./about";

const App = () => (
  <div className="app">
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route component={PageNotFound} />
    </Switch>
    <Footer />
    <PrivacyModal />
  </div>
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
