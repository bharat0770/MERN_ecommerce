"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_redux_1 = require("react-redux");
var order_1 = require("../redux/api/order");
var Orders = function () {
    var _a;
    var _b = (0, react_redux_1.useSelector)(function (state) {
        return state.userReducer;
    }), user = _b.user, loading = _b.loading;
    var _c = (0, order_1.useMyOrderQuery)(user === null || user === void 0 ? void 0 : user._id), data = _c.data, isError = _c.isError, error = _c.error, isLoading = _c.isLoading;
    if (error) {
        var err = error;
        react_hot_toast_1.default.error((_a = err.data) === null || _a === void 0 ? void 0 : _a.message);
    }
    return (<div className="transaction">
            <div className="orderItems">
                <h1>transactions</h1>
                {data === null || data === void 0 ? void 0 : data.message.map(function (order) { return (<OrderCard id={order._id} amount={order.total} discount={order.discount} status={order.status}/>); })}
            </div>
        </div>);
};
var OrderCard = function (_a) {
    var id = _a.id, amount = _a.amount, discount = _a.discount, status = _a.status;
    return (<>
        <div className='transaction-items'>
            <span>orderId : {id}</span>
            <span>amount : {amount}</span>
            <span>discount : {discount}</span>
            <span>
                status : 
            <span className={"".concat(status === "processing" ? "red" : status === "shipped" ? "green" : "purple")}>  {status}</span>
            </span>
            </div>
        </>);
};
exports.default = Orders;
