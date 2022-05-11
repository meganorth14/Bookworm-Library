import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import { dateToString } from '../utility/HelperMethods';

function OrderHistory() {

  const userid = useSelector((state) => state.login.value.userid);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/orders/user/${userid}`).then(res => {
      let orderList = res.data;
      if(!!orderList) {
        orderList.map(o => o.orderDate = dateToString(o.orderDate));
        orderList.sort((a,b) => a.userid - b.userid).reverse();
      }
      setOrders(orderList);
    })
  }, [userid])

  const handleDownload = (event) => {
    event.preventDefault();

    alert('PDF downloaded successfully!');
  }

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
        <td>{book.publishYear}</td>
        <td><Button onClick={handleDownload}>Download</Button></td>
      </tr>
    ))
  );

  const renderOrders = orders.map(order => (
    <Card key={order.orderid} style={{ marginTop: '10px' }}>
        <Card.Header>{order.orderDate}</Card.Header>
      <Card.Body>
        <Card.Title>Order #{order.orderid}</Card.Title>
        <Table striped bordered hover responsive style={{ marginTop: '10px' }}>
          <thead>
            <tr>
              <th>ISBN13</th>
              <th>Title</th>
              <th>Author(s)</th>
              <th>Pages</th>
              <th>Publisher</th>
              <th>Publish Year</th>
              <th>Download PDF</th>
            </tr>
          </thead>
          <tbody>
            {renderBooks(order.books)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  ));

  return (<>
    {!!orders ? renderOrders : <div> You don't have any past orders.</div>}
  </>)

}

export default OrderHistory;
