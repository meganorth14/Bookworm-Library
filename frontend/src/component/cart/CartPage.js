import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import Book from './Book'

function CartPage() {

  const [cart, setCart] = useState([
    {
      book_id: 17,
      cover: "3.png",
      title: "Beauty of Nature",
      author: "Hae-Won Jeon",
      rental_length: "10 days"
    },
    {
      book_id: 9,
      cover: "5.png",
      title: "Simple Recipe",
      author: "Juliana Silva",
      rental_length: "6 days"
    },
    {
      book_id: 67,
      cover: "9.png",
      title: "Silent in the Dark",
      author: "Sebastian Bennett",
      rental_length: "3 days"
    }
  ]);

  cart.forEach(book => console.log(book));

  function removeItem(id){
    setCart(cart.filter((book)=>book.book_id !== id));
  }

  return(
    <div className="container navoffset">
      <h2 className="center">Your Order</h2>
      {cart.length > 0 ?
          <Table bsPrefix="table cartlist" responsive>
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Rental Period</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => { 
                return (
                  <Book key={item.book_id} item={item} removeItem={()=>removeItem(item.book_id)}/>
                );
              })}
            </tbody>
          </Table>
        : <p>No items selected.</p>
      }
    </div>
  );
}

export default CartPage;
