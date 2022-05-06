import {Card, Tooltip, OverlayTrigger, Accordion} from 'react-bootstrap';
import { AiOutlineCheck} from 'react-icons/ai';

function Books({book, addToCart}) {

  return(
    <>
      <Card className="bookcard">
        {book.cover?
          <img src={`./${book.cover}`} alt={`Cover for ${book.title}`}/>
        : <img src="./no_cover.png" alt={`Cover for ${book.title}`}/>
        }
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          {book.authors?
              <Card.Subtitle className="text-muted">{book.authors}</Card.Subtitle>
            : <Card.Subtitle className="text-muted">Unknown Author</Card.Subtitle>
          }
          <div><small className="text-muted">{book.genres}</small></div>
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
              <hr/>
              {book.pages &&
                <div><small className="text-muted">{book.pages} pages</small></div>
              }
              <div><small className="text-muted">{book.publisher}
              {book.publisher && book.publish_year && <b> | </b>} 
              {book.publish_year}</small></div>
              {book.isbn && 
                <div><small className="text-muted">ISBN:{book.isbn}</small></div>}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </>
  );
}

export default Books;
