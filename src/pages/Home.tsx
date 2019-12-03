/**
 *  Home
 *
 *  @type Component
 *  @desc the home page
 */

import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Jumbotron>
        <Container>
          <h1>Home</h1>
        </Container>
      </Jumbotron>
      <div id="content">
        <Container>
          <p>This is the home page!</p>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
