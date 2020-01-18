import React from "react";
import { Route, Switch } from "react-router-dom";

import * as routes from "../constants/routes";
import { Home, NotFound } from "./pages";

const Routes: React.FC = () => {
  return (
    <Switch>
      {/**
       * Home
       * @route /
       * @access public
       */}
      <Route exact={true} path={routes.HOME}>
        <Home />
      </Route>

      {/**
       * 404 page
       * @access public
       */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
