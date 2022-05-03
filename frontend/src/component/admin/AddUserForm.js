import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

function AddUserForm() {

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState('false');
  const handleShow = () => {show ? setShow(false) : setShow(true)};

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if(form.checkValidity() === 'false') {
      event.preventDefault();
      event.stopPropogation();
    }

    setValidated('true');
  };

  const renderUserForm = (
    <Modal 
      noValidate
      show={show}
      validated={validated}
      onHide={handleShow}
      onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>Create New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Role Type</Form.Label>
            <Form.Select defaultValue="Select Role..." required>
              <option disabled>Select Role...</option>
              <option>user</option>
              <option>admin</option>
            </Form.Select>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="user@email.com" required/>
          </Form.Group>
          <Row style={{ marginTop: '10px' }}>
            <Form.Group as={Col} controlId='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" required/>
              <Form.Control.Feedback>Invalid Username</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password" required/>
            </Form.Group>
          </Row>
          <Row style={{ marginTop: '10px' }}>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="John" required/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Smith" required/>
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return(
    <>
      <Button onClick={handleShow} style={{ marginTop: '10px' }}>
        Create New User
      </Button>
      {renderUserForm}
    </>
  );

}

export default AddUserForm;