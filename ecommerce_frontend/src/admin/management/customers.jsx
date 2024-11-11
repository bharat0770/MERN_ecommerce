"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var user_1 = require("../../redux/api/user");
var fa_1 = require("react-icons/fa");
var react_redux_1 = require("react-redux");
var customers = function () {
    var user = (0, react_redux_1.useSelector)(function (state) { return state.userReducer; }).user;
    var data = (0, user_1.useAllUsersQuery)(user === null || user === void 0 ? void 0 : user.email).data;
    var deleteUser = (0, user_1.useDeleteUserMutation)()[0];
    var deleteHandler = function (userEmail) {
        var res = deleteUser({ userEmail: userEmail, email: user === null || user === void 0 ? void 0 : user.email });
        console.log(res);
    };
    return (<>
        <div className="customers-all">
        {data === null || data === void 0 ? void 0 : data.message.map(function (i) { return (<UserCard id={i._id} name={i.name} photo={i.photo} email={i.email} deleteHandler={deleteHandler}/>); })}
        </div>
        </>);
};
exports.default = customers;
var UserCard = function (_a) {
    var id = _a.id, name = _a.name, photo = _a.photo, email = _a.email, deleteHandler = _a.deleteHandler;
    return (<>
            <div className="customer-info">
                <img src={photo} alt="user image"/>
                <p>{name}</p>
                <p>{email}</p>
                <button className="del-customer-btn" onClick={function () { deleteHandler(email); }}><fa_1.FaTrash /></button>
            </div>
        </>);
};
