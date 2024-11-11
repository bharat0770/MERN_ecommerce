"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var order_1 = require("../../redux/api/order");
var transactionCard_1 = require("./components/transactionCard");
var transactionManagement = function () {
    var _a;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_redux_1.useSelector)(function (state) {
        return state.userReducer;
    }), user = _b.user, loading = _b.loading;
    var _c = (0, order_1.useAllOrderQuery)(user === null || user === void 0 ? void 0 : user.email), data = _c.data, isError = _c.isError, error = _c.error, isLoading = _c.isLoading;
    console.log(data);
    if (error) {
        var err = error;
        react_hot_toast_1.default.error((_a = err.data) === null || _a === void 0 ? void 0 : _a.message);
    }
    var redirectToManagement = function (id) {
        // navigate("/admin/product/create"); 
        navigate("/admin/transaction/".concat(id));
    };
    return (<div className="transaction">
            <div className="orderItems">
                <h1>transactions</h1>
                {data === null || data === void 0 ? void 0 : data.message.map(function (order) { return (<transactionCard_1.default id={order._id} name={order.user.name} amount={order.total} discount={order.discount} status={order.status} handler={redirectToManagement}/>); })}
            </div>
        </div>);
};
exports.default = transactionManagement;
