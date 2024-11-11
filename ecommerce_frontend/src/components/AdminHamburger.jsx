"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AdminHamburger = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    return (<>
            {isOpen && (<div className='overlay visible' onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}></div>)}
            <button className={"cancel-btn ".concat(isOpen ? 'open' : '')} onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>X</button>
            <div className="admin-hamburger">
                <button className="admin-hamburger-btn" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>
                    <span></span><span></span><span></span>
                </button>
                <div className={"admin-hamburger-content ".concat(isOpen ? 'open' : '')}>
                    <ul>
                        <li><react_router_dom_1.Link to="admin/product/create" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>create product</react_router_dom_1.Link></li>
                        <li><react_router_dom_1.Link to="admin/product/all" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>all product</react_router_dom_1.Link></li>
                        <li><react_router_dom_1.Link to="admin/product/process" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>transactions</react_router_dom_1.Link></li>
                        <li><react_router_dom_1.Link to="admin/dashboard" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>Dashboard</react_router_dom_1.Link></li>
                        <li><react_router_dom_1.Link to="admin/dashboard/bar" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>Bar charts</react_router_dom_1.Link></li>
                        <li><react_router_dom_1.Link to="admin/dashboard/pie" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>Pie charts</react_router_dom_1.Link></li>
                        <li><react_router_dom_1.Link to="admin/dashboard/line" onClick={function () { return setIsOpen(function (prev) { return !prev; }); }}>Line charts</react_router_dom_1.Link></li>
                    </ul>
                </div>
            </div>
        </>);
};
exports.default = AdminHamburger;
