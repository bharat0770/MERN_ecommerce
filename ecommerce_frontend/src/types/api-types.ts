import { Product } from "./types";

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