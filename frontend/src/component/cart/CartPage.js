import React from "react";
import {Table} from 'react-bootstrap';
import Book from './Book'
import {useSelector, useDispatch} from 'react-redux'
import {removeFromCart, emptyCart} from '../../slices/cart/CartSlice';

function CartPage() {

  const cart = useSelector((state)=>state.cart.value.items);
  const dispatch = useDispatch();

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
                  <Book key={item.book_id} item={item} removeItem={()=>dispatch(removeFromCart(item.book_id))}/>
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
