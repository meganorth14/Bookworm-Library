import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Login from "../component/loginregister/Login";
import Register from "../component/loginregister/Register";
import CartSidebar from "./cart/CartSidebar";
import {Navbar, Container, Nav, Badge} from 'react-bootstrap';
import {FiShoppingCart} from 'react-icons/fi';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  return(
    <>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Bookworm Library Logo"
              src="./bookworm_logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bookworm Digital Library
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <button className="headerbtn" onClick={() => navigate('/#featured')}>Featured</button>
              <button className="headerbtn" onClick={() => navigate('/products')}>Catalog</button>
              {loggedIn?
                <button className="headerbtn" onClick={() => navigate('/account')}>Account</button>
                : <button className="headerbtn" onClick={() => setShowLogin(true)}>Login/Register</button>
              }
              {/* {admin?
                <button className="headerbtn" onClick={() => navigate('/admin')}>Admin Portal</button>
              : ""
              } */}
              <button className="headerbtn" onClick={()=>setShowCart(true)}>
                <FiShoppingCart /> <Badge pill bg="secondary">{cartCount}</Badge><span className="visually-hidden">items in cart</span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} setShowRegister={setShowRegister} setLoggedIn={setLoggedIn} />
      <Register showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} setLoggedIn={setLoggedIn} />
      <CartSidebar showCart={showCart} setShowCart={setShowCart} />
    </>
  );
}

export default Header;
