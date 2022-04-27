import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import tempbookicon from "../assets/images/FeaturedBooksIconBase.jpg";
import gideon from "../assets/images/GideonNinth.jpg";

function Recommend() {
  return (
    <>
      <div className="recommendations-banner">
        <div className="container">
          <div className="row">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={tempbookicon} />
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Title of Book</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Book Author</Card.Subtitle>
                  <Card.Text>
                    Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={gideon} />
                <Card.Header>Madison Loved</Card.Header>
                <Card.Body>
                  <Card.Title>Gideon the Ninth</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Tamsyn Muir</Card.Subtitle>
                  <Card.Text>
                    Gideon the Ninth is the first book in the Locked Tomb Series of adult science-fiction/fantasy novels featuring space necromancy. Gideon Nav is an orphan raised in the Ninth House until she's made the cavalier primary to Harrowhark,the heir to the Ninth House, when the Emperor sends for the House heirs to come to an isolated ancient mansion full of secrets about necromancy they need to unconver to study the path to Lyctorhood.  
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={tempbookicon} />
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Title 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                  <Card.Text>
                    Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
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