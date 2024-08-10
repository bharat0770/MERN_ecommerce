import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { cartReducerInitialState } from "../../types/reducer-types";
import { cartItem } from "../../types/types";

const initialState :cartReducerInitialState = {
    loading  : false, 
    cartItems : [], 
    subTotal  : 0, 
    tax  : 0, 
    discount :  0, 
    shippingCharges : 0, 
    total : 0, 
    shippingInfo : {
        address : "",  
        city : "",  
        state : "",  
        country : "",  
        pinCode : ""
    }
}

const cartReducer = createSlice({
    name : "cartReducer", 
    initialState,
    reducers : {
        addToCart : (state, action : PayloadAction <cartItem>) => {
            state.loading = true; 
                let index = state.cartItems.findIndex((i) => i.productId === action.payload.productId); 
            if(index !== -1){
                state.cartItems[index] = action.payload; 
            }else{
                state.cartItems.push(action.payload); 
            }
            state.loading = false; 
        }, 
        removeFromCart : (state, action :PayloadAction<string>) => {
            state.loading = true; 
            state.cartItems = state.cartItems.filter((i) => i.productId !== action.payload); 
            state.loading = false; 
        }, 
        calculatePrice : (state) => {
            const subTotal = state.cartItems.reduce((sum, i) => sum + (i.price * i.quantity), 0); 
            state.subTotal = subTotal
            state.shippingCharges = state.subTotal > 1000 ?  0 : 200, 
            state.tax = Math.round(state.subTotal * 0.18); 
            state.total = state.subTotal + state.shippingCharges + state.tax - state.discount; 
        }, 
        applyDiscount : (state, action : PayloadAction<number>) => {
            state.discount = action.payload;
        }
    }
})
export default cartReducer;
export const {addToCart, removeFromCart, calculatePrice, applyDiscount} = cartReducer.actions;