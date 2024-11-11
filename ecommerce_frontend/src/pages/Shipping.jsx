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
var axios_1 = require("axios");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var cartReducer_1 = require("../redux/reducer/cartReducer");
var Shipping = function () {
    var _a = (0, react_redux_1.useSelector)(function (state) { return state.cartReducer; }), cartItems = _a.cartItems, total = _a.total;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (cartItems.length <= 0) {
            return navigate("/");
        }
    }, [cartItems]);
    var _b = (0, react_1.useState)({
        address: "",
        city: "",
        state: "",
        country: "india ",
        pinCode: "",
    }), shippingInfo = _b[0], setShippingInfo = _b[1];
    var stateChange = function (e) {
        setShippingInfo(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var submitHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    console.log("shipping info", shippingInfo);
                    dispatch((0, cartReducer_1.saveShippingInfo)(shippingInfo));
                    return [4 /*yield*/, axios_1.default.post("".concat(import.meta.env.VITE_SERVER, "/api/v1/payment/create"), {
                            amount: total
                        }, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    navigate("/pay", {
                        state: data.clientSecret,
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className='shippingDetails'>
            <form onSubmit={submitHandler}>
            <h1>Shipping Info</h1>
                <input type="text" placeholder="address" name="address" value={shippingInfo.address} onChange={stateChange} required/>
                <input type="text" placeholder="city" name="city" value={shippingInfo.city} onChange={stateChange} required/>
                <input type="text" placeholder="state" name="state" value={shippingInfo.state} onChange={stateChange} required/>
                <select name="country" value={shippingInfo.country} onChange={stateChange}>
                    <option value="India">India</option>
                    <option value="US">Us</option>
                    <option value="Japan">Japan</option>
                </select>

                <input type="text" placeholder="pinCode" name="pinCode" value={shippingInfo.pinCode} onChange={stateChange} required/>
                <button type="submit" className="btn-pay">pay now</button>
            </form>
        </div>);
};
exports.default = Shipping;
