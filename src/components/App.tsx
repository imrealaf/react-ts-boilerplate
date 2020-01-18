import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./App.scss";

import { Routes } from "./";
import { Preload } from "./ui";

const App: React.FC = () => {
  /*
   *  Add font awesome icons to library
   */
  library.add(fas, fab);

  /*
   *  Render
   */
  return (
    <React.Fragment>
      {/**
       * Preload
       */}
      <Preload animateOut={true}>
        <FontAwesomeIcon
          className="text-primary"
          icon={["fas", "gem"]}
          size="4x"
        />
      </Preload>

      {/**
       * Main
       */}
      <main id="main" role="main">
        <Routes />
      </main>
    </React.Fragment>
  );
};

export default App;
