import React from "react";
import { Link } from "react-router-dom";

type Cartprops = {
    cartItem : any 
}

const Cartitem  = ( {cartItem} : Cartprops)  => {
return (
    <>
    <div className="cart-item">
        <img src={cartItem.photo} alt="product image"/>
        <div className="cart-item-info">
        <div className="cart-item-name">
        <Link to = {`/poduct/${cartItem.productId}`}>{cartItem.name}</Link>
        <p>{`₹${cartItem.price}`}</p>
        </div>
        <div className="cart-item-btns">
        <button>-</button>
        <span>{cartItem.quantity}</span>
        <button>+</button>
        </div>
        </div>
    </div>
    </>
)
}


export default Cartitem; 
