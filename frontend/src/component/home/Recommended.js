import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function Recommend() {
  return (
    <>
      <div className="featured-banner">
        <div className="container">
          <div className="row">
            <CardGroup>
              <Card>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Title 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                  <Card.Text>
                    Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="/">Go to</Card.Link>
                </Card.Footer>
              </Card>
              <Card>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Title 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                  <Card.Text>
                    Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="/">Go to</Card.Link>
                </Card.Footer>
              </Card>
              <Card>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Title 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                  <Card.Text>
                    Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="/">Go to</Card.Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recommend;