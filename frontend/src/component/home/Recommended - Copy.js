import React, {useState} from "react";
import { Button, ButtonGroup, Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import gideon from "../assets/bookcovers/GideonNinth.png";
import nocover from "../assets/bookcovers/no_cover.png";
import {FcDislike,FcLike,FcPlus,FcRating,FcPaid } from "react-icons/fc";

function Recommend() {


  return (
    <>
      <div className="recommendations-banner">
        <div className="container">
          <h3 className="rec-title">Our Current Recommendations:</h3>
          <div className="row">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={nocover} />
                <Card.Header>Recommended by Megan</Card.Header>
                <Card.Body>
                  <Card.Title>Book Title </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                  <Card.Text>
                    Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={gideon} />
                <Card.Header>Recommended by Madison</Card.Header>
                <Card.Body>
                  <Card.Title>Gideon the Ninth</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Tamsyn Muir</Card.Subtitle>
                  <Card.Text>
                    The Emperor needs necromancers.

                    The Ninth Necromancer needs a swordswoman.

                    Gideon has a sword, some dirty magazines, and no more time for undead nonsense.

                    Brought up by unfriendly, ossifying nuns, ancient retainers, and countless skeletons, Gideon is ready to abandon a life of servitude and an afterlife as a reanimated corpse. She packs up her sword, her shoes, and her dirty magazines, and prepares to launch her daring escape. But her childhood nemesis won’t set her free without a service.

                    Harrowhark Nonagesimus, Reverend Daughter of the Ninth House and bone witch extraordinaire, has been summoned into action. The Emperor has invited the heirs to each of his loyal Houses to a deadly trial of wits and skill. If Harrowhark succeeds she will be become an immortal, all-powerful servant of the Resurrection, but no necromancer can ascend without their cavalier. Without Gideon’s sword, Harrow will fail, and the Ninth House will die.

                    Of course, some things are better left dead.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Series: Locked Tomb Trilogy; 1</ListGroupItem>
                  <ListGroupItem>Publication Year: 2019</ListGroupItem>
                  <ListGroupItem>Genre: Science Fantasy, LGBTQA+</ListGroupItem>
                </ListGroup>
                <Card.Footer> 
                  <div className="containerbuttons">
                    <div className="row">
                      <div className="col-sm-8 col-md-6 col-xs-12">
                        <button className="iconbtn">
                          <FcPaid size={30} />
                        </button>
                      </div>
                      <div className="col-sm-2 col-md-6 col-xs-12">
                        <ButtonGroup className="featureicons">
                          <button className="iconbtn">
                            <FcLike size={30} />
                          </button>
                          <button className="iconbtn">
                            <FcDislike size={30} />
                          </button>
                          <button className="iconbtn">
                            <FcRating size={30} />
                          </button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={nocover} />
                <Card.Header>Recommended by Gino</Card.Header>
                <Card.Body>
                  <Card.Title>Book Title </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                  <Card.Text>
                    Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={nocover} />
                <Card.Header>Recommended by Samuel</Card.Header>
                <Card.Body>
                  <Card.Title>Book Title </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
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