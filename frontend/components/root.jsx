import "core-js/fn/object/assign";
import "core-js/fn/promise";
import React from "react";
import { Provider } from "react-redux";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
