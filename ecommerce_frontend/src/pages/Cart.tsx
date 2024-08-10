import React, { useEffect, useState } from "react";
import CartItemCard from "../components/Cartitem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartReducerInitialState } from "../types/reducer-types";
import { cartItem } from "../types/types";
import { addToCart, applyDiscount, calculatePrice, removeFromCart } from "../redux/reducer/cartReducer";
import axios from "axios";


const Cart = () => {
    const {token : CancelToken, cancel } = axios.CancelToken.source(); 
    const dispatch = useDispatch();
    const { subTotal, tax, shippingCharges, total, discount, cartItems } = useSelector((state: { cartReducer: cartReducerInitialState }) => state.cartReducer);
    useEffect(() => {
        dispatch(calculatePrice());
    }, [cartItems]);
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            axios.get(`${import.meta.env.VITE_SERVER}/api/v1/payment/discount?coupon=${couponCode}`).then((res)=>{

                dispatch(applyDiscount(res.data.discount)); 
                setIsValidCouponCode(true)
            }).catch(() => {
                dispatch(applyDiscount(0));
                cancel(); 
                setIsValidCouponCode(false);

            }); 
        }, 1000);
        return () => {
            clearTimeout(timeOutId);
        }
    }, [couponCode]);
    const incrementHandler = (cartItem: cartItem) => {
        if (cartItem.quantity >= cartItem.stock) return;
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
    }
    const decrementHandler = (cartItem: cartItem) => {
        if (cartItem.quantity <= 1) return;
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
    }
    const removeHandler = (productId: string) => {
        dispatch(removeFromCart(productId));
    }
    return (
        <>
            <div className="cart">
                <main>
                    <>
                        {
                            cartItems.map((item, idx) => {
                                return (
                                    <CartItemCard
                                        key={idx}
                                        cartItem={item}
                                        incrementHandler={incrementHandler}
                                        decrementHandler={decrementHandler}
                                        removeHandler={removeHandler}
                                    />
                                )
                            })
                        }
                    </>
                </main>
                <aside>
                    <p>SubTotal : ₹{subTotal}</p>
                    <p>ShippingCharges : ₹{shippingCharges}</p>
                    <p>Tax : ₹{tax}</p>

                    <p>Discount : <span className="red">{`-₹${discount}`}</span></p>
                    <b>Total : ₹{total}</b>
                    <input type="text" placeholder="coupon code" value={couponCode} onChange={(e) => {
                        setCouponCode(e.target.value);
                    }} />
                    {couponCode && (
                        isValidCouponCode ?
                            <p className="green">
                                {discount} off using the coupon code <code>{couponCode}</code>
                            </p> : <p className="red">invalid coupon</p>
                    )
                    }
                    {
                        cartItems.length > 0 && <p><Link className="checkout-link" to="/shipping">CheckOut</Link></p>
                    }
                </aside>
            </div>
        </>
    )
}

export default Cart; 