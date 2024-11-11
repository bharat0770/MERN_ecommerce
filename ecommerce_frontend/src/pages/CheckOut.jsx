"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var stripe_js_1 = require("@stripe/stripe-js");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var order_1 = require("../redux/api/order");
var cartReducer_1 = require("../redux/reducer/cartReducer");
var stripePromise = (0, stripe_js_1.loadStripe)("pk_test_51PnvJ4EXtISc9LPGoJl3Kals9ZKxq1EpQv0LNpWPPCSQnvzYyYE2omQvxCkkREGRB3pJYR3e1IB7jpXD05a10JTE00ayeKmGMW");
var CheckoutForm = function () {
    var stripe = (0, react_stripe_js_1.useStripe)();
    var elements = (0, react_stripe_js_1.useElements)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var newOrder = (0, order_1.useNewOrderMutation)()[0];
    var user = (0, react_redux_1.useSelector)(function (state) { return state.userReducer; }).user;
    var _a = (0, react_redux_1.useSelector)(function (state) { return state.cartReducer; }), cartItems = _a.cartItems, subTotal = _a.subTotal, tax = _a.tax, discount = _a.discount, shippingCharges = _a.shippingCharges, total = _a.total, shippingInfo = _a.shippingInfo;
    var submitHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var orderData, _a, paymentIntent, error, res, orderError_1, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 9, , 10]);
                    if (!elements || !stripe)
                        return [2 /*return*/];
                    orderData = {
                        orderItems: cartItems,
                        subTotal: subTotal,
                        tax: tax,
                        discount: discount,
                        shippingCharges: shippingCharges,
                        total: total,
                        shippingInfo: shippingInfo,
                        user: user === null || user === void 0 ? void 0 : user._id,
                    };
                    return [4 /*yield*/, stripe.confirmPayment({
                            elements: elements,
                            confirmParams: { return_url: window.location.origin },
                            redirect: "if_required",
                        })];
                case 2:
                    _a = _b.sent(), paymentIntent = _a.paymentIntent, error = _a.error;
                    if (error) {
                        react_hot_toast_1.default.error(error.message || "Something went wrong");
                        console.error("Payment Error:", error);
                        return [2 /*return*/];
                    }
                    if (!(paymentIntent && paymentIntent.status === "succeeded")) return [3 /*break*/, 7];
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, newOrder(orderData)];
                case 4:
                    res = _b.sent();
                    if (res.error) {
                        console.error("New Order Error:", res.error);
                        react_hot_toast_1.default.error("Order failed");
                        return [2 /*return*/];
                    }
                    dispatch((0, cartReducer_1.resetCart)());
                    navigate("/orders");
                    return [3 /*break*/, 6];
                case 5:
                    orderError_1 = _b.sent();
                    console.error("Order Error:", orderError_1);
                    react_hot_toast_1.default.error("Order processing failed");
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    console.error("Payment not successful or PaymentIntent not available.");
                    _b.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    err_1 = _b.sent();
                    console.error("Error during submitHandler execution:", err_1);
                    react_hot_toast_1.default.error("An unexpected error occurred");
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    return (<>
            <form onSubmit={submitHandler}>
                <react_stripe_js_1.PaymentElement />
                <button>
                    pay
                </button>
            </form>
        </>);
};
var CheckOut = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var clientSecret = location.state;
    if (!clientSecret)
        return <react_router_dom_1.Navigate to={"/shipping"}/>;
    return (<react_stripe_js_1.Elements options={{
            clientSecret: clientSecret,
        }} stripe={stripePromise}>
            <CheckoutForm />
        </react_stripe_js_1.Elements>);
};
exports.default = CheckOut;
