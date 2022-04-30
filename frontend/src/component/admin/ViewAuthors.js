import React from "react";
import { Button, Card, Table } from "react-bootstrap";

const authors = [
  { authorId: 1, name: 'Jules Verne' },
  { authorId: 2, name: 'F. Scott Fitzgerald' },
  { authorId: 3, name: 'Aristotle' },
  { authorId: 4, name: 'G.R.R. Martin' }
];

function ViewAuthors() {
  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Body>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>Author Name</th>
                <th>Delete Author</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically Render Users START */}
              {authors.map((author) => (
                <tr key={author.authorId}>
                  <td>{author.name}</td>
                  <td>
                    <Button disabled>Delete</Button>
                  </td>
                </tr>
              ))}
              {/* Dynamically Render Users END */}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export default ViewAuthors;
