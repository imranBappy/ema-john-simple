import React from 'react';
import './header.css'
import logo from '../../images/logo.png';
import {
    Link
} from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <a href="/">
                    <img className='logo' src={logo} />
                </a>
            </div>
            <nav className="nav">
                <div className="container">
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="manage">Manage Inventory</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;