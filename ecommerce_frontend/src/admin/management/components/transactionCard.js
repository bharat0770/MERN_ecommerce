"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var transactionCard = function (_a) {
    var id = _a.id, name = _a.name, amount = _a.amount, discount = _a.discount, status = _a.status, handler = _a.handler;
    return (<>
            <div className='transaction-items'>
            <span>orderId : {id}</span>
            <span>name : {name}</span>
            <span>amount : {amount}</span>
            <span>discount : {discount}</span>
            <span>
                status : 
            <span className={"".concat(status === "processing" ? "red" : status === "shipped" ? "green" : "purple")}>  {status}</span>
            </span>
            <span>
                <button className="transaction-manage" onClick={function () {
            console.log("handler with id", id);
            handler(id);
        }}>manage</button>
            </span>
            </div>
        </>);
};
exports.default = transactionCard;
