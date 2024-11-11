"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Product_card_1 = require("../components/Product-card");
var product_1 = require("../redux/api/product");
var loader_1 = require("../components/loader");
var react_hot_toast_1 = require("react-hot-toast");
var react_redux_1 = require("react-redux");
var cartReducer_1 = require("../redux/reducer/cartReducer");
var Home = function () {
    var _a = (0, react_redux_1.useSelector)(function (state) {
        return state.userReducer;
    }), user = _a.user, loading = _a.loading;
    var userId = user === null || user === void 0 ? void 0 : user._id;
    var dispatch = (0, react_redux_1.useDispatch)();
    var _b = (0, product_1.useLatestProductQuery)(""), data = _b.data, isError = _b.isError, isLoading = _b.isLoading;
    if (isError)
        react_hot_toast_1.toast.error("Cannot fetch products");
    var addToCartHandler = function (cartItem) {
        if (cartItem.stock < 1)
            return react_hot_toast_1.toast.error("Out of stock");
        dispatch((0, cartReducer_1.addToCart)(cartItem));
        react_hot_toast_1.toast.success("Added to cart");
        var productId = cartItem.productId, quantity = cartItem.quantity;
        dispatch((0, cartReducer_1.updateCart)({ userId: userId, productId: productId, quantity: quantity, }));
    };
    return (<>
      <div className="home-content">
        <div className="big-image">  </div>
        <h1>latest products
          <react_router_dom_1.Link className="more-link" to="/search">more</react_router_dom_1.Link>
        </h1>
        <main className="home-products">
          {isLoading ? <loader_1.Loader /> :
            (data === null || data === void 0 ? void 0 : data.message) && Array.isArray(data.message) && data.message.map(function (i) { return (<Product_card_1.default key={i._id} name={i.name} productId={i._id} photo={i.photo} price={i.price} stock={i.stock} handler={addToCartHandler}/>); })}
        </main>
      </div>
    </>);
};
exports.default = Home;
