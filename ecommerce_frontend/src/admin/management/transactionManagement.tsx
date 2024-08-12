import React from "react";
import { useParams } from "react-router-dom";
import { useOrderDetailsQuery } from "../../redux/api/order";
import { FaTrash } from "react-icons/fa";

type props = {
    name: string;
    quantity: number;
    price: number;
    photo: string;
};

const ProductCard = ({ name, quantity, price, photo }: props) => {
    return (
        <>
            <div className="transaction-order-item">
                <img
                    src={`${import.meta.env.VITE_SERVER}/uploads/${photo}`}
                    alt="product image"
                />
                <p>{name}</p>
                <p>
                    {price} X {quantity}
                </p>
            </div>
        </>
    );
};

const transactionManagement = () => {
    const { id } = useParams();
    const { data, isError, error, isLoading } = useOrderDetailsQuery(id!);
    // const orderItems = data?.message.orderItems;
    const defaultData = {
        shippingInfo: {
          address: "",
          city: "",
          state: "",
          country: "",
          pinCode: "",
        },
        status: "",
        subtotal: 0,
        discount: 0,
        shippingCharges: 0,
        tax: 0,
        total: 0,
        orderItems: [],
        user: { name: "", _id: "" },
        _id: "",
      };
    const {
        shippingInfo: { address, city, state, country, pinCode },
        orderItems,
        user: { name },
        status,
        tax,
        subTotal,
        total,
        discount,
        shippingCharges,
    } = data?.message! || defaultData;
    console.log(orderItems);
    const updateHandler = () => { };
    const deleteHandler = () => { };
    return (
        <>
            <div className="transaction-management">
                <div className="orderItems">
                    {orderItems?.map((item: any, index: number) => (
                        <ProductCard
                            key={index}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            photo={item.photo}
                        />
                    ))}
                </div>
                <div className="transaction-info">
                    <button className="product-delete-btn" onClick={deleteHandler}>
                        <FaTrash />
                    </button>
                    <h1>Order Info</h1>
                    <h5>User Info</h5>
                    <p>Name: {name}</p>
                    <p>
                        Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
                    </p>
                    <h5>Amount Info</h5>
                    <p>Subtotal: {subTotal}</p>
                    <p>Shipping Charges: {shippingCharges}</p>
                    <p>Tax: {tax}</p>
                    <p>Discount: {discount}</p>
                    <p>Total: {total}</p>

                    <h5>Status Info</h5>
                    <p>
                        Status:{" "}
                        <span
                            className={
                                status === "Delivered"
                                    ? "purple"
                                    : status === "Shipped"
                                        ? "green"
                                        : "red"
                            }
                        >
                            {status}
                        </span>
                    </p>
                    <button className="shipping-btn" onClick={updateHandler}>
                        Process Status
                    </button>
                </div>
            </div>
        </>
    );
};

export default transactionManagement;
