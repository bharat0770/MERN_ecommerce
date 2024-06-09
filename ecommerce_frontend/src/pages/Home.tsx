import React from 'react';
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import ProductCard from '../components/Product-card';
const Home = () => {
  const addToCartHandler = () => {}; 
  return (
    <>
    <div className="home-content">
    <section className="big-image"></section>
    
    <h1>latest products
    <Link className = "more-link"to="/search">more</Link>
    </h1>
    <main className="home-products">
      <ProductCard 
      productId= "abck"
      name = "mackBook" 
      price = {65000}
      stock = {500}
      handler={addToCartHandler}
      photo = "https://m.media-amazon.com/images/I/719C6bJv8jL._SX425_.jpg"
      />
    </main>
    </div>
    </>
  )
}
export default Home;