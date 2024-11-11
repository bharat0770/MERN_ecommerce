"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Cartitem_1 = require("../components/Cartitem");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var cartReducer_1 = require("../redux/reducer/cartReducer");
var axios_1 = require("axios");
var Cart = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_redux_1.useSelector)(function (state) {
        return state.userReducer;
    }), user = _a.user, loading = _a.loading;
    var userId = user === null || user === void 0 ? void 0 : user._id;
    //?requires optimizing => use debouncing here
    var _b = axios_1.default.CancelToken.source(), CancelToken = _b.token, cancel = _b.cancel;
    var _c = (0, react_redux_1.useSelector)(function (state) { return state.cartReducer; }), subTotal = _c.subTotal, tax = _c.tax, shippingCharges = _c.shippingCharges, total = _c.total, discount = _c.discount, cartItems = _c.cartItems;
    (0, react_1.useEffect)(function () {
        dispatch((0, cartReducer_1.calculatePrice)());
    }, [cartItems, dispatch]);
    var _d = (0, react_1.useState)(""), couponCode = _d[0], setCouponCode = _d[1];
    var _e = (0, react_1.useState)(false), isValidCouponCode = _e[0], setIsValidCouponCode = _e[1];
    (0, react_1.useEffect)(function () {
        var timeOutId = setTimeout(function () {
            axios_1.default
                .get("".concat(import.meta.env.VITE_SERVER, "/api/v1/payment/discount?coupon=").concat(couponCode))
                .then(function (res) {
                dispatch((0, cartReducer_1.applyDiscount)(res.data.discount));
                setIsValidCouponCode(true);
            })
                .catch(function () {
                dispatch((0, cartReducer_1.applyDiscount)(0));
                cancel();
                setIsValidCouponCode(false);
            });
        }, 1000);
        return function () {
            clearTimeout(timeOutId);
        };
    }, [couponCode]);
    var incrementHandler = function (cartItem) {
        if (cartItem.quantity >= cartItem.stock)
            return;
        dispatch((0, cartReducer_1.increaseQuantity)(__assign(__assign({}, cartItem), { quantity: cartItem.quantity + 1 })));
        var productId = cartItem.productId;
        dispatch((0, cartReducer_1.updateCart)({ userId: userId, productId: productId, quantity: 1 }));
    };
    var decrementHandler = function (cartItem) {
        if (cartItem.quantity <= 1)
            return;
        dispatch((0, cartReducer_1.decreaseQuantity)(__assign(__assign({}, cartItem), { quantity: cartItem.quantity - 1 })));
        var productId = cartItem.productId;
        dispatch((0, cartReducer_1.updateCart)({ userId: userId, productId: productId, quantity: -1 }));
    };
    var removeHandler = function (productId) {
        dispatch((0, cartReducer_1.removeFromCart)(productId));
        dispatch((0, cartReducer_1.deleteProduct)({ userId: userId, productId: productId }));
    };
    return (<>
            <div className="cart">
                <main>
                    <>
                        {cartItems.map(function (item, idx) {
            return (<Cartitem_1.default key={idx} cartItem={item} incrementHandler={incrementHandler} decrementHandler={decrementHandler} removeHandler={removeHandler}/>);
        })}
                    </>
                </main>
                <aside>
                    <p>SubTotal : ₹{subTotal}</p>
                    <p>ShippingCharges : ₹{shippingCharges}</p>
                    <p>Tax : ₹{tax}</p>

                    <p>
                        Discount : <span className="red">{"-\u20B9".concat(discount)}</span>
                    </p>
                    <b>Total : ₹{total}</b>
                    <input type="text" placeholder="coupon code" value={couponCode} onChange={function (e) {
            setCouponCode(e.target.value);
        }}/>
                    {couponCode &&
            (isValidCouponCode ? (<p className="green">
                                {discount} off using the coupon code <code>{couponCode}</code>
                            </p>) : (<p className="red">invalid coupon</p>))}
                    {cartItems.length > 0 && (<p>
                            <react_router_dom_1.Link className="checkout-link" to="/shipping">
                                CheckOut
                            </react_router_dom_1.Link>
                        </p>)}
                </aside>
            </div>
        </>);
};
exports.default = Cart;
