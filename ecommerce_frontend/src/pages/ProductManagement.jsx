"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var product_1 = require("../redux/api/product");
var ProductManagement = function () {
    var id = (0, react_router_dom_1.useParams)().id;
    var _a = (0, product_1.useProductDetailsQuery)(id), product = _a.data, isLoading = _a.isLoading, error = _a.error;
    if (isLoading)
        return <div>...Loading</div>;
    // console.log(product);
    if (error) {
        console.log(error);
    }
    if (!product)
        return <div>No product found</div>;
    var _b = product.message, _id = _b._id, photo = _b.photo, name = _b.name, price = _b.price, stock = _b.stock;
    return (<>
    <div className="product-management">
      <div className="product-image">
        <img src={"".concat(import.meta.env.VITE_SERVER, "/uploads/").concat(photo)} alt=""/>
      </div>
      <div className="product-info">
        <p>{name}</p>
        <p>₹{price}</p>
        <p>{stock} In stock</p>

      </div>
    </div>
    </>);
};
exports.default = ProductManagement;
