import React, { useEffect } from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
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
    addRouteAttrToDOM(location);
  }, [location]);

  /*
   *  render()
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
