
import { lazy } from 'react';
import {  BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from "./components/Header"
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
// import Home from  "./pages/Home";
// import Cart from  "./pages/Cart";

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/cart' element= {<Cart/>}/>
</Routes>
</BrowserRouter>

  )
}

export default App;