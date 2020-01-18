import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

// RedirectRoute props
interface IRedirectRouteProps extends RouteProps {
  condition: boolean;
  to: string;
}

const RedirectRoute: React.FC<IRedirectRouteProps> = ({
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.condition ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: rest.to,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default RedirectRoute;
