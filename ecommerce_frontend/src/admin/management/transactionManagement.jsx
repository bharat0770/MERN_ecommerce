"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var order_1 = require("../../redux/api/order");
var fa_1 = require("react-icons/fa");
var react_hot_toast_1 = require("react-hot-toast");
var ProductCard = function (_a) {
    var name = _a.name, quantity = _a.quantity, price = _a.price, photo = _a.photo;
    return (<>
            <div className="transaction-order-item">
                <img src={"".concat(import.meta.env.VITE_SERVER, "/uploads/").concat(photo)} alt="product image"/>
                <div className="order-item-info">
                <p>{name}</p>
                <p>
                    {price} X {quantity} = ₹{price * quantity}
                </p>
                </div>
            </div>
        </>);
};
var transactionManagement = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var id = (0, react_router_dom_1.useParams)().id;
    var _a = (0, order_1.useOrderDetailsQuery)(id), data = _a.data, isError = _a.isError, error = _a.error, isLoading = _a.isLoading;
    var updateTransaction = (0, order_1.useUpdateOrderMutation)()[0];
    var deleteTransaction = (0, order_1.useDeleteOrderMutation)()[0];
    var defaultData = {
        shippingInfo: {
            address: "",
            city: "",
            state: "",
            country: "",
            pinCode: "",
        },
        status: "",
        subtotal: 0,
        discount: 0,
        shippingCharges: 0,
        tax: 0,
        total: 0,
        orderItems: [],
        user: { name: "", _id: "" },
        _id: "",
    };
    var _b = (data === null || data === void 0 ? void 0 : data.message) || defaultData, _c = _b.shippingInfo, address = _c.address, city = _c.city, state = _c.state, country = _c.country, pinCode = _c.pinCode, orderItems = _b.orderItems, name = _b.user.name, status = _b.status, tax = _b.tax, subTotal = _b.subTotal, total = _b.total, discount = _b.discount, shippingCharges = _b.shippingCharges;
    var updateHandler = function (id) {
        // useUpdateOrderMutation(data?.message._id!);
        updateTransaction(id);
        react_hot_toast_1.default.success("Order updated successfully");
        navigate("/admin/product/process");
    };
    var deleteHandler = function (id) {
        deleteTransaction(id);
        react_hot_toast_1.default.success("Order deleted successfully");
        navigate("/admin/product/process");
    };
    return (<>
            <div className="transaction-management">
                <div className="orderItems">
                    {orderItems === null || orderItems === void 0 ? void 0 : orderItems.map(function (item, index) { return (<ProductCard key={index} name={item.name} quantity={item.quantity} price={item.price} photo={item.photo}/>); })}
                </div>
                <div className="transaction-info">
                    <button className="product-delete-btn" onClick={function () { deleteHandler(id); }}>
                        <fa_1.FaTrash />
                    </button>
                    <h1>Order Info</h1>
                    <p>ID: {id}</p>

                    <h5>User Info</h5>
                    <p>Name: {name}</p>
                    <p>
                        Address: {"".concat(address, ", ").concat(city, ", ").concat(state, ", ").concat(country, " ").concat(pinCode)}
                    </p>
                    <h5>Amount Info</h5>
                    <p>Subtotal: {subTotal}</p>
                    <p>Shipping Charges: {shippingCharges}</p>
                    <p>Tax: {tax}</p>
                    <p>Discount: {discount}</p>
                    <p>Total: {total}</p>

                    <h5>Status Info</h5>
                    <p>
                        Status:{" "}
                        <span className={status === "delivered"
            ? "purple"
            : status === "shipped"
                ? "green"
                : "red"}>
                            {status}
                        </span>
                    </p>
                    <button className="shipping-btn" onClick={function () { updateHandler(id); }}>
                        Process Status
                    </button>
                </div>
            </div>
        </>);
};
exports.default = transactionManagement;
