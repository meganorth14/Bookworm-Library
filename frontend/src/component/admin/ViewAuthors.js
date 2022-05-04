import React from "react";
import { Card, Table } from "react-bootstrap";

function ViewAuthors() {

  const authors = [
    { authorId: 1, name: 'Aravind Adiga' },
    { authorId: 2, name: 'Ernest Hemingway' },
    { authorId: 3, name: 'Neil Gaiman' },
    { authorId: 4, name: 'Dave McKean' }
  ];
  
  const renderAuthors = authors.map(author => (
    <tr key={author.authorId}>
      <td>{author.name}</td>
    </tr>
  ));
  
  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>Total Authors: {authors.length}</Card.Header>
        <Card.Body>
          <Card.Title>All Authors</Card.Title>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>Author Name</th>
              </tr>
            </thead>
            <tbody>
              {renderAuthors}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );

}

export default ViewAuthors;
