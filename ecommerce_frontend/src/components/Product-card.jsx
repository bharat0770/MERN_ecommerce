"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var ProductCard = function (_a) {
    var productId = _a.productId, photo = _a.photo, name = _a.name, price = _a.price, stock = _a.stock, handler = _a.handler;
    return (<>
            <div className="product-card">
                <img src={"".concat(import.meta.env.VITE_SERVER, "/uploads/").concat(photo)} alt="product-image"/>
                <p className="product-name">{name}</p>
                <span className="product-price">₹{price}</span>
                <div className="opac-btn">
                    <button onClick={function () { return handler({ productId: productId, photo: photo, stock: stock, price: price, name: name, quantity: 1 }); }}><fa_1.FaPlus /></button>
                </div>
            </div>
        </>);
};
exports.default = ProductCard;
