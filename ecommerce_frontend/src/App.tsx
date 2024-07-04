import React from 'react';
import { lazy } from 'react';
import {  BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from "./components/Header"
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Login = lazy(() => import("./pages/Login"));
const Search = lazy(() => import("./pages/Search"));

// import Home from  "./pages/Home";
// import Shipping from './pages/Shipping';
// import Cart from  "./pages/Cart";

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/cart' element= {<Cart/>}/>
  <Route path='/shipping' element= {<Shipping/>}/>
  <Route path='/Login' element= {<Login/>}/>
  <Route path='/Search' element= {<Search/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App;