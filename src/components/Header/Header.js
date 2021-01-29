import React from 'react';
import './header.css'
import logo from '../../images/logo.png';
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
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="manage">Manage Inventory</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;