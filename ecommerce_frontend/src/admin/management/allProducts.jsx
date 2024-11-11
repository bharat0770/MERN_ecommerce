"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var product_1 = require("../../redux/api/product");
var react_router_dom_1 = require("react-router-dom");
var AllProductCard = function (_a) {
    var id = _a.id, name = _a.name, photo = _a.photo, price = _a.price, stock = _a.stock, category = _a.category;
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<>
            <img src={"".concat(import.meta.env.VITE_SERVER, "/uploads/").concat(photo)} alt="product image"/>
            <span>productId : {id}</span>
            <span>name : {name}</span>
            <span>price : {price}</span>
            <span>stock : {stock}</span>
            <span>category : {category}</span>
            <span>
                <button className="product-manage" onClick={function () { navigate("/admin/product/update/?id=".concat(id)); }}>manage</button>
            </span>
  </>);
};
var allProducts = function () {
    var user = (0, react_redux_1.useSelector)(function (state) { return state.userReducer; }).user;
    var data = (0, product_1.useAllProductQuery)(user === null || user === void 0 ? void 0 : user.email).data;
    console.log(data);
    return (<>
      <div className="all-products">
    {data === null || data === void 0 ? void 0 : data.message.map(function (e) { return (<div className="all-products-item">
        <AllProductCard id={e._id} name={e.name} photo={e.photo} price={e.price} stock={e.stock} category={e.category}/>
        </div>); })}
    </div>
    </>);
};
exports.default = allProducts;
