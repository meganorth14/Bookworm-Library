import React from "react";
import {Table} from 'react-bootstrap';
import { TiDeleteOutline } from 'react-icons/ti';

const cart = [
  {
    book_id: 17,
    cover: "3.png",
    title: "Beauty of Nature",
    author: "Hae-Won Jeon"
  },
  {
    book_id: 9,
    cover: "5.png",
    title: "Simple Recipe",
    author: "Juliana Silva"
  },
  {
    book_id: 67,
    cover: "9.png",
    title: "Silent in the Dark",
    author: "Sebastian Bennett"
  }
]

function CartPage() {

  return(
    <>
      <div className="container navoffset">
        <h2 className="center">Your Order</h2>
      {cart.length > 0 ?
          <Table bsPrefix="table cartlist" responsive>
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => { 
                return (
                  <tr key={item.book_id}>
                    <td><img className="cover" alt={`Cover for ${item.title}`} src={`./${item.cover}`} /></td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td><button className="deletebtn"><TiDeleteOutline /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        : <p>No items selected.</p>
      }
      </div>
    </>
  );
}

export default CartPage;
