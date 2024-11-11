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
var product_1 = require("../../redux/api/product");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var react_hot_toast_1 = require("react-hot-toast");
var updateProduct = function () {
    var _a = (0, react_redux_1.useSelector)(function (state) {
        return state.userReducer;
    }), user = _a.user, loading = _a.loading;
    // const params = useParams(); 
    // const {data} = useProductDetailsQuery(params.id!); 
    var location = (0, react_router_dom_1.useLocation)();
    var queryParams = new URLSearchParams(location.search);
    var prodId = queryParams.get('id');
    // http://localhost:5173/admin/update/product/?id=669aa37bbf5f1a8780e9258a
    var _b = (0, react_1.useState)(""), id = _b[0], setId = _b[1];
    var _c = (0, react_1.useState)(""), name = _c[0], setName = _c[1];
    var _d = (0, react_1.useState)(), price = _d[0], setPrice = _d[1];
    var _e = (0, react_1.useState)(), stock = _e[0], setStock = _e[1];
    var _f = (0, react_1.useState)(""), category = _f[0], setCategory = _f[1];
    var _g = (0, react_1.useState)(""), photo = _g[0], setPhoto = _g[1];
    var _h = (0, react_1.useState)(""), updatedname = _h[0], setUpdatedName = _h[1];
    var _j = (0, react_1.useState)(0), updatedprice = _j[0], setUpdatedPrice = _j[1];
    var _k = (0, react_1.useState)(), updatedstock = _k[0], setUpdatedStock = _k[1];
    var _l = (0, react_1.useState)(""), updatedcategory = _l[0], setUpdatedCategory = _l[1];
    var _m = (0, react_1.useState)(""), updatedphotoPrev = _m[0], setUpdatedPhotoPrev = _m[1];
    var _o = (0, react_1.useState)(), updatedphoto = _o[0], setUpdatedPhoto = _o[1];
    var _p = (0, product_1.useDeleteProductMutation)(), deleteProduct = _p[0], _q = _p[1], loadingDelete = _q.isLoading, errorDelete = _q.isError;
    var _r = (0, product_1.useUpdateProudctMutation)(), updateProduct = _r[0], _s = _r[1], loadingUpdate = _s.isLoading, errorUpdate = _s.isError;
    var product = (0, product_1.useProductDetailsQuery)(prodId).data;
    (0, react_1.useEffect)(function () {
        setId(product === null || product === void 0 ? void 0 : product.message._id);
        setName(product === null || product === void 0 ? void 0 : product.message.name);
        setPrice(product === null || product === void 0 ? void 0 : product.message.price);
        setStock(product === null || product === void 0 ? void 0 : product.message.stock);
        setCategory(product === null || product === void 0 ? void 0 : product.message.category);
        setPhoto(product === null || product === void 0 ? void 0 : product.message.photo);
        // setId(data?.message._id!)
        setUpdatedName(product === null || product === void 0 ? void 0 : product.message.name);
        setUpdatedPrice(product === null || product === void 0 ? void 0 : product.message.price);
        setUpdatedStock(product === null || product === void 0 ? void 0 : product.message.stock);
        setUpdatedCategory(product === null || product === void 0 ? void 0 : product.message.category);
        // setUpdatedPhoto(data?.message.photo!)        
    }, [product]);
    var deleteHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteProduct({ email: user === null || user === void 0 ? void 0 : user.email, id: product === null || product === void 0 ? void 0 : product.message._id })];
                case 1:
                    res = _a.sent();
                    if ("data" in res) {
                        react_hot_toast_1.toast.success(res.data ? res.data.message : "product deleted successfully");
                    }
                    if ("error" in res) {
                        err = res.error;
                        data = err.data;
                        react_hot_toast_1.toast.error(data.message);
                    }
                    setUpdatedName("");
                    setUpdatedPrice(0);
                    setUpdatedStock(0);
                    setUpdatedCategory("");
                    setId("");
                    setName("");
                    setPrice(0);
                    setStock(0);
                    setCategory("");
                    setPhoto("");
                    return [2 /*return*/];
            }
        });
    }); };
    var submitHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formdata, res;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    formdata = new FormData();
                    setName(updatedname);
                    setPrice(updatedprice);
                    setStock(updatedstock);
                    setCategory(updatedcategory);
                    setPhoto(updatedphotoPrev);
                    setPhoto(updatedphotoPrev);
                    if (updatedname)
                        formdata.set("name", updatedname);
                    if (updatedprice)
                        formdata.set("price", updatedprice.toString());
                    if (updatedstock)
                        formdata.set("stock", updatedstock.toString());
                    if (updatedcategory)
                        formdata.set("category", updatedcategory);
                    if (updatedphoto)
                        formdata.set("photo", updatedphoto);
                    return [4 /*yield*/, updateProduct({ id: (_a = product === null || product === void 0 ? void 0 : product.message) === null || _a === void 0 ? void 0 : _a._id, email: user === null || user === void 0 ? void 0 : user.email, formdata: formdata })];
                case 1:
                    res = _b.sent();
                    if ("data" in res)
                        react_hot_toast_1.toast.success("Product updated successfully");
                    if ("error" in res) {
                        react_hot_toast_1.toast.error("Error while updating prodjuct");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var imageHandler = function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                if (typeof (reader.result) === "string") {
                    setUpdatedPhotoPrev(reader.result);
                    console.log("updated photo preview" + updatedphotoPrev);
                    setUpdatedPhoto(file);
                    // console.log( "updatedPhoto"+ UpdatedPhoto);
                }
            };
        }
    };
    return (
    //  <adminSidebar/>  
    <div className='update-product'>
            <div className="old-product">
                <strong>ID - {id}</strong>
                <h3>Name : {name}</h3>
                <img src={"".concat(import.meta.env.VITE_SERVER, "/uploads/").concat(photo) ? "".concat(import.meta.env.VITE_SERVER, "/uploads/").concat(photo) : updatedphotoPrev} alt='product-image'/>
                <h3>Price : {price}</h3>
                <h3>Category : {category}</h3>
                {stock > 0 ? (<span className="green">Stock : {stock}</span>) : (<span className="red">{stock}</span>)}
                <button className="delete-product-btn" onClick={deleteHandler}>Delete</button>
            </div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter product name" value={updatedname} onChange={function (e) { setUpdatedName(e.target.value); }}/>
                <input type="number" placeholder="Enter product price" value={updatedprice} onChange={function (e) { setUpdatedPrice(Number(e.target.value)); }}/>
                <input type="number" placeholder="Enter product stock" value={updatedstock} onChange={function (e) { setUpdatedStock(Number(e.target.value)); }}/>
                <input type="text" placeholder="Enter product category" value={updatedcategory} onChange={function (e) { setUpdatedCategory(e.target.value); }}/>
                <input type="file" onChange={imageHandler}/>
                {updatedphotoPrev && <img src={updatedphotoPrev} alt="New Image"/>}
                <button type="submit">Create</button>
            </form>
        </div>);
};
exports.default = updateProduct;
