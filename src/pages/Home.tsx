/**
 *  Home
 *
 *  @type Component
 *  @desc the home page
 */

import React from "react";
import { Container, Jumbotron, Button, Modal } from "react-bootstrap";

import { Page } from "../components/hoc";
import { useModal } from "../hooks";

const Home: React.FC = () => {
  // Example modal api
  const modal = useModal();
  return (
    <Page>
      <Jumbotron>
        <Container>
          <h1>Home</h1>
          <Button onClick={modal.handleShow}>Toggle modal</Button>
        </Container>
      </Jumbotron>
      <div id="content">
        <Container>
          <p>This is the home page!</p>
        </Container>
      </div>
      <Modal show={modal.show} onHide={modal.handleClose}>
        <Modal.Header closeButton>
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
