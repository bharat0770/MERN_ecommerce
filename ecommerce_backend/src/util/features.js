const mongoose = require("mongoose");
const Product = require("../models/product");
const nodeCache = require("node-cache");
const myCache = new nodeCache();
 const connectDB = () => {
    // mongoose.connect("mongodb://localhost:27017", {
    //     dbName : "Ecommerce_24", 
    // })
    // .then((c) => { console.log(`DB connectred to ${c.connection.host}`)})
    // .catch((e) => {console.log(e)});
    return mongoose.connect("mongodb://localhost:27017/Ecommerce_24");
};

const setCache = (key, productList) => {
    myCache.set(key, JSON.stringify(productList));
    console.log(key + " cached"); 
}
const getCache = (key) => {
    if(myCache.has(key)){
        return JSON.parse(myCache.get(key));
    }
}
const validateCache = (key) => {
    return myCache.has(key); 
}
const invalidateCache = async (props) => {
    try {        
        const {product, order, admin} = props;
        if(product){
            let productkeys = [
                "latest-product", 
                "product-categories",
                "all-products",
            ];
        const productIds = await Product.find({}).select("_id"); 
        productIds.forEach((id) => {
            productkeys.push(`product-${id}`); 
        })
        myCache.del(productkeys);
    }
    if(order){}
    if(admin){}
} catch (error) {
    console.log("error" + error.message);
}
}

const reduceStock = async(orderItems) => { 
    for (let i = 0; i < orderItems.length; i++) {
    const order = orderItems[i];
    const product = await Product.findById(order.productId);
    if (!product) throw new Error("Product Not Found");
    product.stock -= order.quantity;
    await product.save();
    }
};

module.exports = {
    connectDB, 
    getCache, 
    setCache, 
    validateCache, 
    invalidateCache, 
    reduceStock,
};
