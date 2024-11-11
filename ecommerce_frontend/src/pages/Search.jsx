"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Product_card_1 = require("../components/Product-card");
var product_1 = require("../redux/api/product");
var react_hot_toast_1 = require("react-hot-toast");
var cartReducer_1 = require("../redux/reducer/cartReducer");
var react_redux_1 = require("react-redux");
var Search = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, product_1.useCategoriesQuery)(""), data = _a.data, isLoading = _a.isLoading, isError = _a.isError, error = _a.error;
    if (isError) {
        var err = error;
        react_hot_toast_1.toast.error(err.data.message);
    }
    var _b = (0, react_1.useState)(""), search = _b[0], setSearch = _b[1];
    var _c = (0, react_1.useState)(100000), maxprice = _c[0], setMaxPrice = _c[1];
    var _d = (0, react_1.useState)(""), sort = _d[0], setSort = _d[1];
    var _e = (0, react_1.useState)(""), category = _e[0], setCategory = _e[1];
    var _f = (0, react_1.useState)(1), page = _f[0], setPage = _f[1];
    var isNextPage = page < 4;
    var isPrevPage = page > 1;
    var addToCartHandler = function (cartItem) {
        if (cartItem.stock < 1)
            return react_hot_toast_1.toast.error("Out of stock");
        dispatch((0, cartReducer_1.addToCart)(cartItem));
        react_hot_toast_1.toast.success("Added to cart");
    };
    var searchObj = {
        search: search,
        price: maxprice,
        category: category,
        sort: sort,
        page: page,
    };
    var _g = (0, product_1.useSeachProductQuery)(searchObj), searchedproducts = _g.data, productsLoading = _g.isLoading, productsError = _g.isError;
    console.log(searchedproducts);
    if (productsError) {
        console.log(error);
        var err = error;
        react_hot_toast_1.toast.error(err.data.message);
    }
    return (<div className="search-ui">
            <aside>
                <h2>Filters</h2>
                <div>
                    <h4>sort</h4>
                    <select name="order" value={sort} onChange={function (e) { return setSort(e.target.value); }}>
                        <option value="">none</option>
                        <option value="asc">low to high</option>
                        <option value="desc">high to low</option>
                    </select>
                </div>
                <div>
                    <h4>Max Price : {maxprice || ""}</h4>
                    <input type="range" min={0} max={100000} value={maxprice} onChange={function (e) {
            setMaxPrice(Number(e.target.value));
        }}/>
                </div>
                <div>
                    <h4>category</h4>
                    <select name="category" value={category} onChange={function (e) {
            setCategory(e.target.value);
        }}>
                        <option value="">All</option>
                        {!isLoading &&
            (data === null || data === void 0 ? void 0 : data.message.map(function (i) { return (<option key={i} value={i}>
                                    {i.toUpperCase()}
                                </option>); }))}
                    </select>
                </div>
            </aside>
            <main>
                <div>
                    <h2>Products</h2>
                    <input type="text" value={search} placeholder="Search product " onChange={function (e) { return setSearch(e.target.value); }}/>
                </div>
                <div className="product-list">

                    {searchedproducts === null || searchedproducts === void 0 ? void 0 : searchedproducts.message.map(function (product) { return (<Product_card_1.default key={product._id} productId={product._id} name={product.name} price={product.price} stock={product.stock} handler={addToCartHandler} photo={product.photo}/>); })}
                </div>
                {searchedproducts && searchedproducts.totalPages > 1 ? (<div className="pagination">
                            <button className="prev" disabled={!isPrevPage} onClick={function (e) {
                setPage(function (prev) { return prev - 1; });
            }}>
                                prev
                            </button>
                            <p className="pg">
                                {page} of {4}
                            </p>
                            <button className="next" disabled={!isNextPage} onClick={function (e) {
                setPage(function (prev) { return prev + 1; });
            }}>
                                next
                            </button>
                        </div>) : <div></div>}
            </main>
        </div>);
};
exports.default = Search;
