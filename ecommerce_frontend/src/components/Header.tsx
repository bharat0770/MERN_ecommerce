import React, { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { id: '123', role: 'user' };

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const logoutHandeler = () => {};
    return (
        <>
            <nav className="Header">
                <Link to="/">Home</Link>
                <Link to="/search">
                    <FaSearch />
                </Link>
                <Link to="/cart"><FaShoppingBag /></Link>
                {user.id ? (
                    <>
                    <div className="user-dialog">

                        <button onClick={() => setIsOpen((prev) => !prev)}>
                            <FaUser />
                        </button>
                        <dialog className="login-dialog" open={isOpen}>
                            <div >
                                <Link to='/orders' className="user-links">orders</Link>
                                <Link to="/login" className="user-links" onClick={logoutHandeler}><FaSignOutAlt /></Link>
                            </div>
                        </dialog>
                    </div>
                    </>
                ) : <Link to="/logIn"><FaSignInAlt /></Link>
                }
            </nav>

        </>
    );
};

export default Header;
