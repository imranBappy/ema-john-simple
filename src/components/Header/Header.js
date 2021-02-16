import React, { useContext } from 'react';
import './header.css'
import logo from '../../images/logo.png';
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../Storage/UserStorage';
import { handelLogoutAll } from '../Auth/authManager';
const Header = () => {

    const [user, setUser] = useContext(UserContext)
    const handelLogout = () => handelLogoutAll().then(result => { setUser({ ...user, ...result }) })
    const history = useHistory()
    const handelPath = () => {
        history.push('/auth')
    }
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
                    <Link onClick={user.isLoggedIn ? handelLogout : handelPath}>{user.isLoggedIn ? 'Logout' : 'Login'}</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;

