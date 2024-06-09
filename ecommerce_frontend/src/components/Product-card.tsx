 import React from 'react'
import { FaPlus } from 'react-icons/fa'
type productProps = {
    productId: string,
    photo: string,
    name: string,
    price: number,
    stock: number,
    handler: () => void;
}
const ProductCard = ({
    productId,
    photo,
    name,
    price,
    stock,
    handler,
}: productProps) => {
    return (
        <>
            <div className="product-card">
                <img src={photo} alt="product-image" />
                <p className="product-name">{name}</p>
                <span className="product-price">₹{price}</span>
            <div className="opac-btn">
                <button onClick={() => handler()}><FaPlus/></button>
            </div>
            </div>
        </>
    )
}
export default ProductCard;
