import React from "react";
import { Card, Table } from "react-bootstrap";

function ViewGenres() {

  const genres = [
    { genreId: 1, name: 'Mystery' },
    { genreId: 2, name: 'Epistolary' },
    { genreId: 3, name: 'Picaresque' },
    { genreId: 4, name: 'Historical Fiction' },
    { genreId: 5, name: 'Roman à clef' },
    { genreId: 6, name: 'Children\'s Literature' },
    { genreId: 7, name: 'Dark Fantasy' },
    { genreId: 8, name: 'Fairy Tale' }
  ];

  const renderGenres = genres.map(genre => (
    <tr key={genre.genreId}>
      <td>{genre.name}</td>
    </tr>
  ));
  
  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>Total Genres: {genres.length}</Card.Header>
        <Card.Body>
          <Card.Title>All Genres</Card.Title>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>Genre Name</th>
              </tr>
            </thead>
            <tbody>
              {renderGenres}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );

}

export default ViewGenres;
