const errorHandler = require("../middlewares/errorHandler");
const Cart = require("../models/cart"); 

const addItemsToCart = async(req, res, next) => {
    try{ const {userId, cartItems, status} = req.body; 
    const oldCart = await Cart.findOne({userId : userId}); 
    if(!oldCart){
        const result = await Cart.create({
            userId, 
            cartItems, 
            status, 
        })
        res.status(200).json({
            success : true, 
            message :  result, 
        })
    }else{
        oldCart.cartItems.push(...cartItems);
        const result = await oldCart.save(); 
        res.status(200).json({
            success : true, 
            message :  result, 
        })
    }
}catch(err){
        return next(new errorHandler(err.message, 401)); 
    }
}

const removeItemsFromCart = async(req, res, next) => {
    try{ const {userId, productId} = req.body; 
    const cart = await Cart.findOne({userId : userId}); 
    if(!cart){
        return next(new errorHandler("cart doesn't exists", 401)); 
    }
        cart.cartItems = cart.cartItems.filter((i) => {
            console.log(i); 
            return i.productId != productId; 
        }); 
    
    const result = await cart.save(); 
    res.status(200).json({
        success : true, 
        message :  result, 
    })}catch(err){
        return next(new errorHandler(err.message, 401)); 
    }
}

const getCart = async(req, res, next) => {
    try{
        const {userId} = req.query; 
        const cart = await Cart.findOne({userId : userId}); 
        if(!cart){
            return next(new errorHandler("cart doesn't exists", 401)); 
        }
        res.status(201).json({
            success: true, 
            message : cart,
        })
    }catch(err){
        
        return next(new errorHandler(err.message, 401)); 
    }
}
const clearCart = async(req, res, next) => {
    try{
        const {userId} = req.query; 
        const cart = await Cart.findOne({userId : userId}); 
        if(!cart){
            return next(new errorHandler("cart doesn't exists", 401)); 
        }
        cart.cartItems = []; 
        const result = await cart.save(); 
        res.status(201).json({
            success: true, 
            message : result,
        })
    }catch(err){
        
        return next(new errorHandler(err.message, 401)); 
    }
}
module.exports = {
    addItemsToCart, 
    removeItemsFromCart, 
    getCart, 
    clearCart,
};
