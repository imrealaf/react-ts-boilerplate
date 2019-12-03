/**
 *  Index
 *
 *  @type Root
 *  @desc the root of the application where the app is mounted
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import "./styles/index.scss";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
