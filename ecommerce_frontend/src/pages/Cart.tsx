import React, { useEffect, useState } from "react";
import CartItem from "../components/Cartitem"; 
import Cartitem from "../components/Cartitem";
const cartItem = [
    {
        productId : "ajslk;fj", 
        photo :  "https://m.media-amazon.com/images/I/719C6bJv8jL._SX425_.jpg",
        name :  "mackBook",
        price :  150000, 
        quantity : 1, 
        stock : 100, 
    }

]; 
const subTotal = 4000;  
const tax =  Math.round(subTotal * 0.18);
const discount  = 400; 
const shippingCharges = 100;
const total  = subTotal + tax + shippingCharges; 

const Cart = () =>{
    const [CouponCode, setCouponCode] = useState<string>(""); 
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false); 
    useEffect(()=> {
    const timeOutId = setTimeout(() => {
        if(Math.random() > 0.5) setIsValidCouponCode(true); 
        else setIsValidCouponCode(false); 
        }, 1000);   
        return () => {
            clearTimeout(timeOutId);
            setIsValidCouponCode(false);
        }
    } , [CouponCode])

    return (
    <>
    <div className="cart">
    <main>
            <>
            {
                cartItem.map((item, idx) => {
                    return (
                        <CartItem key = {idx} cartItem = {item}/>
                    )
                })
            
}
        
            </>
    </main>
    <aside>
    <p>SubTotal : {subTotal}</p>
    <p>ShippingCharges: {shippingCharges}</p>
    <p>Discount: {discount}</p>
    <input type="text" placeholder="coupon code" value={CouponCode} onChange={(e)=>{
        setCouponCode(e.target.value);
        }} />
    { CouponCode &&(
        isValidCouponCode ? 
        <span className="green">
        {discount} off using the coupon code <code>{CouponCode}</code>
        </span> :  <span className="red">invalid coupon</span>
    )
    }
    <p>Total : {total}</p>
</aside>
    </div>
    </>
) 
}

export default Cart; 