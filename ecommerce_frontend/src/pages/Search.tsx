import React, { useState } from "react";
import ProductCard from "../components/Product-card";

const Search = () => {
    const [search, setSearch] = useState("");
    const [maxprice, setMaxPrice] = useState(100000);
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    const isNextPage = page < 4;
    const isPrevPage = page > 1;
    const addToCartHandler = () => { };
    return (
        <div className="search-ui">
            <aside>
                <h2>Filters</h2>

                <div>
                    <h4>sort</h4>
                    <select
                        name="order"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="">none</option>
                        <option value="asc">low to high</option>
                        <option value="desc">high to low</option>
                    </select>
                </div>
                <div>
                    <h4>Max Price : {maxprice || ""}</h4>
                    <input
                        type="range"
                        min={0}
                        max={100000}
                        value={maxprice}
                        onChange={(e) => {
                            setMaxPrice(Number(e.target.value));
                        }}
                    />
                </div>
                <div>
                    <h4>category</h4>
                    <select
                        name="category"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    >
                        <option value="">All</option>
                        <option value="laptops">laptops</option>
                        <option value="accessories">accessories</option>
                    </select>
                </div>
            </aside>
            <main>
                <div>
                    <h2>Products</h2>
                    <input
                        type="text"
                        value={search}
                        placeholder="Search product "
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="product-list">
                    <ProductCard
                        productId="abck"
                        name="mackBook"
                        price={65000}
                        stock={500}
                        handler={addToCartHandler}
                        photo="https://m.media-amazon.com/images/I/719C6bJv8jL._SX425_.jpg"
                    />
                    <ProductCard
                        productId="abck"
                        name="mackBook"
                        price={65000}
                        stock={500}
                        handler={addToCartHandler}
                        photo="https://m.media-amazon.com/images/I/719C6bJv8jL._SX425_.jpg"
                    />
                        <ProductCard
                            productId="abck"
                            name="mackBook"
                            price={65000}
                            stock={500}
                            handler={addToCartHandler}
                            photo="https://m.media-amazon.com/images/I/719C6bJv8jL._SX425_.jpg"
                        />
                        <ProductCard
                            productId="abck"
                            name="mackBook"
                            price={65000}
                            stock={500}
                            handler={addToCartHandler}
                            photo="https://m.media-amazon.com/images/I/719C6bJv8jL._SX425_.jpg"
                        />
                    
                </div>
                <div className="pagination">
                    <button className="prev" disabled={!isPrevPage} onClick={(e) => {setPage((prev) => prev-1)}}>
                        prev
                    </button>
                    <p className="pg">{page} of {4}</p>
                    <button className="next" disabled={!isNextPage} onClick={(e) => {setPage((prev) => prev+1)}}>
                        next
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Search;