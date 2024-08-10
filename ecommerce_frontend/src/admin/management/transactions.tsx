import React, { useState } from 'react'
import ProductCard from "../../components/Product-card";  
import updateProduct from './updateProduct';
const orderItems = [
    {
    name: "Puma Shoes",
    photo: "",
    id: "asdsaasdas",
    quantity: 4,
    price: 2000,
    }, 
    {
    name: "Puma Shoes",
    photo: "",
    id: "asdsaasdas",
    quantity: 4,
    price: 2000,
    }, 
    {
    name: "Puma Shoes",
    photo: "",
    id: "asdsaasdas",
    quantity: 4,
    price: 2000,
    }, 
    {
    name: "Puma Shoes",
    photo: "",
    id: "asdsaasdas",
    quantity: 4,
    price: 2000,
    }, 
];
const transactionManagement = () => {
    const [order, setOrder] = useState({
        name: "guts",
        address: "77 black street",
        city: "Neyword",
        state: "Nevada",
        country: "US",
        pinCode: 242433,
        status: "Processing",
        subtotal: 4000,
        discount: 1200,
        shippingCharges: 0,
        tax: 200,
        total: 4000 + 200 + 0 - 1200,
        // orderItems : 
    });
    const {  
        name,
        address,
        city,
        state,
        country,
        pinCode,
        status,
        subtotal,
        discount,
        shippingCharges,
        tax,
        total, 
        // orderItems  
} = order;
const updateProduct = () => {
    setOrder((prev) => ({
        ...prev, status : "shipped"
    }))
}
    return (
    <div className="transaction-management">
        <div className="orderItems">
            <h1>Ordered  Items</h1>
            {orderItems.map((i) => (
                <ProductCard 
                    key={i.id}
                    name={i.name}
                    photo={`${i.photo}`}
                    productId={i.id}
                    price={i.price} 
                    stock ={0} 
                    handler={() => {}}/>
            ))}
        </div>
        <div className="transaction-info">
            <h1>Order info</h1>
            <h1>User info</h1>
<p>name : {name}</p>
<p>address : {address}</p>
<p>city : {city}</p>
<p>state : {state}</p>
<p>country : {country}</p>
<p>pinCode : {pinCode}</p>
<p>status : {status}</p>
<p>subtotal : {subtotal}</p>
<p>discount : {discount}</p>
<p>shippingCharges : {shippingCharges}</p>
<p>tax : {tax}</p>
<p>total : {total}</p>
{/* <p>orderItems : {orderItems}</p> */}
<p>Status : <span className={status === "delivered" ? "purple" : status === "shipped"? "green" :  "red" }>{status}</span></p>
<button className="process-transaction-btn" onClick={updateProduct}>Process  Order</button>
        </div>
    </div>
  )
}


export default transactionManagement;