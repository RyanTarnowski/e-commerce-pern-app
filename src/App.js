import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import OrderDetails from './components/OrderDetails/OrderDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/account'>Account</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/products/:productId'>Product Details</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
            <li>
              <Link to='/orders'>Orders</Link>
            </li>
            <li>
              <Link to='/orders/:orderId'>Order Details</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
        <Route path='/account' Component={Account}/>
        <Route path='/products' Component={Products}/>
        <Route path='/products/:productId' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/checkout' Component={Checkout}/>
        <Route path='/orders' Component={Orders}/>
        <Route path='/orders/:orderId' Component={OrderDetails}/>
      </Routes>
    </Router>
  );
}

export default App;