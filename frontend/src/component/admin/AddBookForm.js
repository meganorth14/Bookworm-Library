import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddBookForm() {
  
  const [show, setShow] = useState(false);
  const handleShow = () => {show ? setShow(false) : setShow(true)};

  const renderBookForm = (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>ISBN13</Form.Label>
            <Form.Control type="number" placeholder='978-XXXXXXXXXX' required/>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Book Title" required/>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author Full Name" required/>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Pages</Form.Label>
            <Form.Control type="number" placeholder="Page Count" required/>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Genre</Form.Label>
            <Form.Control type="text" placeholder="Genre" required/>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Publisher</Form.Label>
            <Form.Control type="text" placeholder="Book Publisher" required/>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Publication Year</Form.Label>
            <Form.Control type="number" placeholder="XXXX" required/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <Button onClick={handleShow} style={{ marginTop: '10px' }}>
        Add New Book
      </Button>
      {renderBookForm}
    </>
  );

}

export default AddBookForm;