"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var fa_1 = require("react-icons/fa");
var CartItemCard = function (_a) {
    var cartItem = _a.cartItem, incrementHandler = _a.incrementHandler, decrementHandler = _a.decrementHandler, removeHandler = _a.removeHandler;
    return (<>
            <div className="cart-item">
                <img src={"".concat(import.meta.env.VITE_SERVER, "/uploads/").concat(cartItem.photo)} alt="product image"/>
                <div className="cart-item-info">
                    <div className="cart-item-name">
                        <react_router_dom_1.Link to={"/product/".concat(cartItem.productId)}>{cartItem.name}</react_router_dom_1.Link>
                        <p>{"\u20B9".concat(cartItem.price)}</p>
                    </div>
                    <div className="cart-item-btns">
                        <button onClick={function () { return decrementHandler(cartItem); }}>-</button>
                        {/* <span>{cartItem.quantity}</span> */}
                        <span>{cartItem.quantity}</span>
                        <button onClick={function () { return incrementHandler(cartItem); }}>+</button>
                        <button onClick={function () { return removeHandler(cartItem.productId); }}><fa_1.FaTrash /></button>
                    </div>
                </div>
            </div>
        </>);
};
exports.default = CartItemCard;
