import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './component/Header';
import Home from './component/home/Home';
import LoginRegisterPage from './component/loginregister/LoginRegisterPage';
import Logout from './component/Logout';
import ProductsPage from './component/products/ProductsPage';
import CartPage from './component/cart/CartPage';
import AccountPage from './component/account/AccountPage';
import AdminPage from './component/admin/AdminPage';

function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <Routes>  
        <Route path='/'         element={<Home />}/>
        <Route path='/login'    element={<LoginRegisterPage />}/>
        <Route path='/logout'   element={<Logout />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/cart'     element={<CartPage />}/>
        <Route path='/account'  element={<AccountPage />} />
        <Route path='/admin'    element={<AdminPage />}/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
