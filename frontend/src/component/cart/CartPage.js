import React, {useState} from "react";
import {Table, Alert} from 'react-bootstrap';
import Book from './Book'
import {useSelector, useDispatch} from 'react-redux'
import {removeFromCart, emptyCart} from '../../slices/cart/CartSlice';

function CartPage() {

  const user = useSelector((state)=>state.login.value.username);
  const cart = useSelector((state)=>state.cart.value.items);
  const dispatch = useDispatch();

  const [checkedOut, setCheckedOut] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleCheckout(){
    setCheckedOut(true);
    if(user){
      dispatch(emptyCart());
      setSuccess(true);
    }
  }

  return(
    <div className="container navoffset">
      {user && checkedOut && success &&
        <Alert key="success" variant="success" onClose={() => { setCheckedOut(false); setSuccess(false) }} dismissible >
          Checkout successful!
        </Alert>
      }
      {cart.length > 0 ?
        <>
          {!user && checkedOut && !success &&
            <Alert key="danger" variant="danger" onClose={() => { setCheckedOut(false); setSuccess(false) }} dismissible >
              Cannot checkout. Please sign in.
            </Alert>
          }
          <h2 className="center">Your Order</h2>
          <Table id="cartlist" responsive>
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Rental Period</th>
                <th></th>
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
          < button className="checkoutbtn loginbtn" onClick={handleCheckout}>Checkout</button>
          < button className="checkoutbtn resetbtn" onClick={()=>dispatch(emptyCart())}>Clear</button>
        </>
        : <>
          <h2 className="center">Your Order</h2>
          <p className="center">No items in cart.</p>
        </>
      }
    </div>
  );
}

export default CartPage;
