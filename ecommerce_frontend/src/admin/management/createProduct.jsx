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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var product_1 = require("../../redux/api/product");
var createProduct = function () {
    // taking logged user from store
    var _a = (0, react_redux_1.useSelector)(function (state) {
        return state.userReducer;
    }), user = _a.user, loading = _a.loading;
    // console.log(user?.email);
    var newProduct = (0, product_1.useNewProductsMutation)()[0];
    var _b = (0, react_1.useState)(""), name = _b[0], setName = _b[1];
    var _c = (0, react_1.useState)(), price = _c[0], setPrice = _c[1];
    var _d = (0, react_1.useState)(), stock = _d[0], setStock = _d[1];
    var _e = (0, react_1.useState)(""), category = _e[0], setCategory = _e[1];
    var _f = (0, react_1.useState)(""), photoPrev = _f[0], setPhotoPrev = _f[1];
    var _g = (0, react_1.useState)(), photo = _g[0], setPhoto = _g[1];
    var imageHandler = function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                if (typeof (reader.result) === "string") {
                    setPhotoPrev(reader.result);
                    setPhoto(file);
                }
            };
        }
    };
    var submitHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formdata, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    formdata = new FormData();
                    if (!name ||
                        !price ||
                        !stock ||
                        !category ||
                        !photo)
                        return [2 /*return*/];
                    formdata.set("name", name);
                    formdata.set("price", price.toString());
                    formdata.set("stock", stock.toString());
                    formdata.set("category", category);
                    formdata.set("photo", photo);
                    return [4 /*yield*/, newProduct({ email: user === null || user === void 0 ? void 0 : user.email, formdata: formdata })];
                case 1:
                    res = _a.sent();
                    console.log(res);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className='create-product'>
    {/* <adminSidebar/> */}
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter product name" value={name} onChange={function (e) { setName(e.target.value); }}/>
        <input type="number" placeholder="Enter product price" value={price} onChange={function (e) { setPrice(Number(e.target.value)); }}/>
        <input type="number" placeholder="Enter product stock" value={stock} onChange={function (e) { setStock(Number(e.target.value)); }}/>
        <input type="text" placeholder="Enter product category" value={category} onChange={function (e) { setCategory(e.target.value); }}/>
        <input type="file" onChange={imageHandler}/>
        {photoPrev && <img src={photoPrev} alt="New Image"/>}
        <button type="submit">Create</button>
        </form>
    </div>);
};
exports.default = createProduct;
