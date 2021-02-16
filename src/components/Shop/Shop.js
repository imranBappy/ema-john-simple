import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const fist10 = fakeData.slice(0, 10)
    const [products] = useState(fist10)
    let [cart, setCart] = useState([])

    const handelAddProduct = product => {
        let newCart = [...cart, product]

        const count = newCart.filter(pd => pd.key === product.key)
        addToDatabaseCart(product.key, count.length)
        setCart(Object.keys(getDatabaseCart()).map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = getDatabaseCart()[key];
            return product
        }))
    }

    useEffect(() => {
        setCart(Object.keys(getDatabaseCart()).map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = getDatabaseCart()[key];
            return product
        }))
    }, [])

    return (
        <div className='container'>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd => <Product
                            handelAddProduct={handelAddProduct}
                            key={pd.key}
                            product={pd}
                            showAddToCart={true}
                        />)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart} >
                        <Link to='/review'><button className="main-btn">Review Your Order</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
