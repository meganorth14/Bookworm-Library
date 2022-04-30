import {Card, Tooltip, OverlayTrigger, Accordion} from 'react-bootstrap';
import { AiOutlineCheck} from 'react-icons/ai';

function Books({book, addToCart}) {

  return(
    <>
      <Card className="bookcard">
        <img src={`./${book.cover}`} alt={`Cover for ${book.title}`}/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
          {/* <Card.Text>
            {book.description}
          </Card.Text> */}
        </Card.Body>
        <OverlayTrigger
          placement="right"
          delay={100}
          overlay={<Tooltip id={`tooltip${book.book_id}`} className="tooltip cartcheck"><AiOutlineCheck/></Tooltip>}
          trigger="focus"
        >
          <button className="cartbtn" onClick={addToCart}>Add to Cart</button>
        </OverlayTrigger>
        <Accordion flush>
          <Accordion.Item eventKey={0}>
            <Accordion.Header as="h5">
              View Book Description
            </Accordion.Header>
            <Accordion.Body>
              {book.description}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </>
  );
}

export default Books;
