import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Order({item}) {
  return(
    <>
      <Container className="cartitem">
        <Row className="mb-4">
          <Col xs="auto">
            <img className="cover" alt={`Cover for ${item.title}`} src={`./${item.cover}`} />
          </Col>
          <Col className="cartdetails">
            <h5>{item.title}</h5>
            <p>{item.author}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Order;
