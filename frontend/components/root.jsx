import "core-js/fn/object/assign";
import "core-js/fn/promise";
import React from "react";
import { Provider } from "react-redux";
import App from "./app";
import { HashRouter } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
