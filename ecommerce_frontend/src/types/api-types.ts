import { order, orderItem, Product, ShippingInfo } from "./types";
// for users
// for products
export type MessageResponse =  {
    success : boolean; 
    message : string;
}
export type allProductResponse = {
    success : boolean; 
    message : Product[];
}

export type categoriesResponse= {
    success : boolean; 
    message : string[];
}
export type customError= {
    status : number, 
    data :{success : boolean,  
        
        message : string}, 
    }
    
    export type searchProductResponse = {
        status : number; 
        message :  Product[];
        totalPages  : number;  
        
    } 
    export type searchProductRequest = {
        price : number;
        page : number;
        category : string;
        search : string;
        sort : string;
    } 
    export type newProductRequest = {
        email : string; 
        formdata  : FormData; 
    } 
    export type productDetailResponse = {
        success : boolean; 
        message  : Product; 
    } 
    
    export type updateProductRequest = {
        id : string; 
        email  :  string; 
        formdata : FormData; 
    }
    
    export type deleteProductRequest = {
        email  :  string; 
        id : string;
    }
    
    // for orders
    export type newOrderRequest = {
        shippingInfo :  ShippingInfo; 
        orderItems : orderItem[]; 
        user : string,
        subTotal : number , 
        tax : number ,
        shippingCharges : number,
        discount : number,
        total : number, 
}


export type allOrderResponse = {
    sucess : boolean; 
    message : order[]; 
} 

export type singleOrderResponse = {
    sucess : boolean; 
    message : order; 
} 


// export type updateOrderRequest = {
//     orderId :  string;
// }