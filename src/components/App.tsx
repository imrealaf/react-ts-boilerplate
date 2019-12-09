/**
 *  App
 *
 *  @type Component
 *  @desc the main app container component
 *  @prop location - the location object from route props
 */

import React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

// Routes/pages
import * as routes from "../constants/routes";
import { Home } from "../pages";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  /*
   *  Render
   */
  return (
    <React.Fragment>
      <main id="main" role="main">
        <Switch>
          <Route exact path={routes.HOME}>
            <Home />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default withRouter(App);
