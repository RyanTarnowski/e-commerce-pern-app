import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <Router>
      <MenuBar/>
      <div className="maincontent">
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/register' Component={Register}/>
          <Route path='/login' Component={Login}/>
          <Route path='/account' Component={Account}/>
          <Route path='/products' Component={Products}/>
          <Route path='/cart' Component={Cart}/>
          <Route path='/orders' Component={Orders}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;