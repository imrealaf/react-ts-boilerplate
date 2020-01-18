import React from "react";
import { Button, Container, Jumbotron, Modal } from "react-bootstrap";

import { useToggle } from "../../hooks";
import { Page } from "../hoc";

const Home: React.FC = () => {
  /*
   *  Example modal API
   */
  const modal = useToggle();

  /*
   *  Render
   */
  return (
    <Page title="Home" descrip="This is the home page">
      {/* Hero */}
      <Jumbotron fluid={true}>
        <Container>
          <h1>Home</h1>
          <Button onClick={modal.handleShow}>Toggle modal</Button>
        </Container>
      </Jumbotron>

      {/* Page content */}
      <div id="content">
        <Container>
          <p>This is the home page!</p>
        </Container>
      </div>

      {/* Example modal */}
      <Modal show={modal.show} onHide={modal.handleClose}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modal.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modal.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Page>
  );
};

export default Home;
