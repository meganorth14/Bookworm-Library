import React, { useState } from "react";
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import AddBookForm from "./AddBookForm";

function Inventory() {

  const [books, setBooks] = useState([
    {
      bookId: 1,
      isbn13: '978-1416562603',
      title: 'The White Tiger: A Novel',
      authors: [
        { authorId: 1, name: 'Aravind Adiga' },
      ],
      pages: '320',
      publisher: 'Free Press',
      publishYr: '2008',
      genres: [
        { genreId: 1, name: 'Mystery' },
        { genreId: 2, name: 'Epistolary' },
        { genreId: 3, name: 'Picaresque' }
      ]
    },
    {
      bookId: 2,
      isbn13: '978-0743297332',
      title: 'The Sun Also Rises: The Authorized Edition',
      authors: [
        { authorId: 2, name: 'Ernest Hemingway' }
      ],
      pages: '251',
      publisher: 'Scribner Book Company',
      publishYr: '2006',
      genres: [
        { genreId: 4, name: 'Historical Fiction' },
        { genreId: 5, name: 'Roman à clef' }
      ]
    },
    {
      bookId: 3,
      isbn13: '978-0380807345',
      title: 'Coraline 10th Anniversary Edition',
      authors: [
        { authorId: 3, name: 'Neil Gaiman' },
        { authorId: 4, name: 'Dave McKean' }
      ],
      pages: '212',
      publisher: 'HarperCollins',
      publishYr: '2012',
      genres: [
        { genreId: 6, name: 'Children\'s Literature' },
        { genreId: 7, name: 'Dark Fantasy' },
        { genreId: 8, name: 'Fairy Tale' }
      ]
    }
  ]);

  const handleDelete = (event) => {
    event.preventDefault();

    let temp = books.filter(function (value, _index, _arr) {
      return value.bookId !== Number(event.target.value);
    });
    setBooks(temp);
  };

  const renderAuthors = (authors) => (
    authors.length === 1 ? authors[0].name : (
      <ListGroup>
        {authors.map(author => (
          <ListGroup.Item key={author.authorId}>
            {author.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  );

  const renderGenres = (genres) => (
    genres.length === 1 ? genres[0].name : (
      <ListGroup>
        {genres.map(genre => (
          <ListGroup.Item key={genre.genreId}>
            {genre.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  );

  const renderBooks = books.map(book => (
    <tr key={book.bookId}>
      <td>{book.isbn13}</td>
      <td>{book.title}</td>
      <td>{renderAuthors(book.authors)}</td>
      <td>{book.pages}</td>
      <td>{renderGenres(book.genres)}</td>
      <td>{book.publisher}</td>
      <td>{book.publishYr}</td>
      <td>
        <Button value={book.bookId} onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <AddBookForm />
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>Total Books: {books.length}</Card.Header>
        <Card.Body>
          <Card.Title>All Books</Card.Title>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>ISBN13</th>
                <th>Title</th>
                <th>Author(s)</th>
                <th>Pages</th>
                <th>Genre(s)</th>
                <th>Publisher</th>
                <th>Publish Yr.</th>
                <th>Delete Book</th>
              </tr>
            </thead>
            <tbody>
              {renderBooks}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );

}

export default Inventory;
