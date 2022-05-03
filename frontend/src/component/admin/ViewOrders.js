import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";

function ViewOrders() {

  const orders = [
    {
      orderId: 1,
      username: 'gtownsend',
      orderDate: '01/01/2022',
      books: [
        {
          bookId: 1,
          isbn13: '978-1416562603',
          title: 'The White Tiger: A Novel',
          authors: [
            { authorId: 1, name: 'Aravind Adiga' },
          ],
          pages: '320',
          publisher: 'Free Press',
          publishYr: '2008'
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
          publishYr: '2006'
        }
      ]
    },
    {
      orderId: 2,
      username: 'mschweikert',
      orderDate: '01/01/2022',
      books: [
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
          publishYr: '2012'
        }
      ]
    }
  ];

  const renderAuthors = (authors) => (
    authors.length === 1 ? ( authors[0].name ) : (
      <ListGroup>
        {authors.map(author => (
          <ListGroup.Item key={author.authorId}>
            {author.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  );
  
  const renderBooks = (books) => (
    books.map(book => (
      <tr key={book.bookId}>
        <td>{book.isbn13}</td>
        <td>{book.title}</td>
        <td>{renderAuthors(book.authors)}</td>
        <td>{book.pages}</td>
        <td>{book.publisher}</td>
        <td>{book.publishYr}</td>
      </tr>
    ))
  );
  
  const renderOrders = orders.map(order => (
    <Card key={order.orderId} style={{ marginTop: '10px' }}>
      <Card.Header>{order.orderDate}</Card.Header>
      <Card.Body>
        <Card.Title>Order #{order.orderId}</Card.Title>
        <Card.Subtitle>Username: {order.username}</Card.Subtitle>
        <Table striped bordered hover responsive style={{ marginTop: '10px' }}>
          <thead>
            <tr>
              <th>ISBN13</th>
              <th>Title</th>
              <th>Author(s)</th>
              <th>Pages</th>
              <th>Publisher</th>
              <th>Publish Yr.</th>
            </tr>
          </thead>
          <tbody>
            {renderBooks(order.books)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  ));
  
  return (
    <>
      {renderOrders}
    </>
  );

}

export default ViewOrders;
