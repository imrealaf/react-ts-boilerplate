import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/index.scss";

import { App } from "./components";
import registerServiceWorker from "./registerServiceWorker";

/**
 *  Mount app
 */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

/**
 *  Register service worker
 */
registerServiceWorker();
