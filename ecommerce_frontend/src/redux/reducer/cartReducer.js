"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateCart = exports.fetchCart = exports.resetCart = exports.saveShippingInfo = exports.applyDiscount = exports.calculatePrice = exports.removeFromCart = exports.decreaseQuantity = exports.increaseQuantity = exports.addToCart = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var axios_1 = require("axios");
var react_hot_toast_1 = require("react-hot-toast");
var initialState = {
    loading: false,
    cartItems: [],
    subTotal: 0,
    tax: 0,
    discount: 0,
    shippingCharges: 0,
    total: 0,
    shippingInfo: {
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    }
};
var cartReducer = (0, toolkit_1.createSlice)({
    name: "cartReducer",
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            state.loading = true;
            var index = state.cartItems.findIndex(function (i) { return i.productId === action.payload.productId; });
            if (index !== -1) {
                state.cartItems[index].quantity += action.payload.quantity || 1;
            }
            else {
                state.cartItems.push(action.payload);
            }
            state.loading = false;
        },
        increaseQuantity: function (state, action) {
            var index = state.cartItems.findIndex(function (i) { return i.productId === action.payload.productId; });
            state.cartItems[index].quantity += 1;
        },
        decreaseQuantity: function (state, action) {
            var index = state.cartItems.findIndex(function (i) { return i.productId === action.payload.productId; });
            state.cartItems[index].quantity -= 1;
        },
        removeFromCart: function (state, action) {
            state.loading = true;
            state.cartItems = state.cartItems.filter(function (i) { return i.productId !== action.payload; });
            state.loading = false;
        },
        calculatePrice: function (state) {
            var subTotal = state.cartItems.reduce(function (sum, i) { return sum + (i.price * i.quantity); }, 0);
            state.subTotal = subTotal;
            state.shippingCharges = state.subTotal > 1000 ? 0 : 200,
                state.tax = Math.round(state.subTotal * 0.18);
            state.total = state.subTotal + state.shippingCharges + state.tax - state.discount;
        },
        applyDiscount: function (state, action) {
            state.discount = action.payload;
        },
        saveShippingInfo: function (state, action) {
            state.shippingInfo = action.payload;
        },
        resetCart: function () { return initialState; },
        fetchCart: function (state, action) {
            var data = action.payload.map(function (e) {
                return {
                    name: e.productId.name,
                    photo: e.productId.photo,
                    quantity: e.quantity,
                    productId: e.productId._id,
                    price: e.productId.price
                };
            });
            state.cartItems = data;
        },
        updateCart: function (state, action) {
            var data = {
                userId: action.payload.userId,
                cartItems: [
                    {
                        productId: action.payload.productId,
                        quantity: action.payload.quantity
                    }
                ]
            };
            axios_1.default.post("".concat(import.meta.env.VITE_SERVER, "/api/v1/cart/add"), data)
                .then(function (res) { console.log("cart updated successfully"); }).catch(function (err) { if (err)
                react_hot_toast_1.default.error("an error occurred"); });
        },
        deleteProduct: function (state, action) {
            var data = {
                userId: action.payload.userId,
                productId: action.payload.productId,
            };
            axios_1.default.patch("".concat(import.meta.env.VITE_SERVER, "/api/v1/cart/remove"), data)
                .then(function (res) { console.log("cart updated successfully"); }).catch(function (err) { if (err)
                react_hot_toast_1.default.error("an error occurred"); });
        }
    }
});
exports.default = cartReducer;
exports.addToCart = (_a = cartReducer.actions, _a.addToCart), exports.increaseQuantity = _a.increaseQuantity, exports.decreaseQuantity = _a.decreaseQuantity, exports.removeFromCart = _a.removeFromCart, exports.calculatePrice = _a.calculatePrice, exports.applyDiscount = _a.applyDiscount, exports.saveShippingInfo = _a.saveShippingInfo, exports.resetCart = _a.resetCart, exports.fetchCart = _a.fetchCart, exports.updateCart = _a.updateCart, exports.deleteProduct = _a.deleteProduct;
