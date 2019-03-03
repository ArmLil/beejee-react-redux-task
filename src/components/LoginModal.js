import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

const LoginModal = props => (
  <Modal show={props.showModal} onHide={props.handleClose}>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter login"
            onChange={props.handleLoginChange}
          />
          <Form.Text className="text-muted">{props.loginNote}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={props.handlePasswordChange}
          />
          <Form.Text className="text-muted">{props.passwordNote}</Form.Text>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={event => props.handleClose(event)}>
        Close
      </Button>
      <Button variant="primary" onClick={props.handleSave}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default LoginModal;
