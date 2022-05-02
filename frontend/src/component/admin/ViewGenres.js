import React from "react";
import { Button, Card, Table } from "react-bootstrap";

const genres = [
  { genreId: 1, name: 'Historical Fiction' },
  { genreId: 2, name: 'High Fantasy' },
  { genreId: 3, name: 'Drama' },
  { genreId: 4, name: 'Thriller' }
];

function ViewGenres() {
  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Body>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>Genre Name</th>
                <th>Delete Genre</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically Render Users START */}
              {genres.map((genre) => (
                <tr key={genre.genreId}>
                  <td>{genre.name}</td>
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

export default ViewGenres;
