/**
 *  App
 *
 *  @type Component
 *  @desc the main app container component
 *  @prop location - the location object from route props
 */

import React, { useEffect } from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

// Routes/pages
import { addRouteAttrToDOM } from "../utils";
import * as routes from "../constants/routes";
import { Home } from "../pages";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  /*
   *  On route change ..
   */
  useEffect(() => {
    // add route data attribute to DOM.
    // used for page specific styling, if needed
    addRouteAttrToDOM(location);
  }, [location]);

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
