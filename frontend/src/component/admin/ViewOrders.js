import React from "react";
import { Card, Table } from "react-bootstrap";

const books = {
  1: {
    isbn13: '978-1416562603',
    title: 'The White Tiger: A Novel',
    author: 'Aravind Adiga',
    pages: '320',
    publisher: 'Free Press',
    publishYr: '2008'
  },
  2: {
    isbn13: '978-0743297332',
    title: 'The Sun Also Rises: The Authorized Edition',
    author: 'Ernest Hemingway',
    pages: '251',
    publisher: 'Scribner Book Company',
    publishYr: '2006'
  }
};

const orders = [
  {
    orderId: 1,
    username: 'gtownsend',
    orderDate: '01/01/2022',
    books: [2,1]
  },
  {
    orderId: 2,
    username: 'mschweikert',
    orderDate: '01/01/2022',
    books: [2]
  }
];


const renderOrders =
  orders.map(order => (
    <Card key={order.orderId} style={{ marginTop: '10px' }}>
      <Card.Body>
        <Card.Title>Order ID: {order.orderId}</Card.Title>
        <Card.Subtitle>{order.username} — submitted {order.orderDate}</Card.Subtitle>
        <Table striped bordered hover responsive style={{ marginTop: '10px' }}>
          <thead>
            <tr>
              <th>ISBN13</th>
              <th>Title</th>
              <th>Author</th>
              <th>Pages</th>
              <th>Publisher</th>
              <th>Publish Yr.</th>
            </tr>
          </thead>
          <tbody>
            {order.books.map(book => (
              <tr key={book}>
                <td>{books[book].isbn13}</td>
                <td>{books[book].title}</td>
                <td>{books[book].author}</td>
                <td>{books[book].pages}</td>
                <td>{books[book].publisher}</td>
                <td>{books[book].publishYr}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  ));

function ViewOrders() {
  return (
    <>
      {renderOrders}
    </>
  );
}

export default ViewOrders;
