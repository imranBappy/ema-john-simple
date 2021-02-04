import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const fist10 = fakeData.slice(0, 10)
    const [products] = useState(fist10)
    let [cart, setCart] = useState([])
    const handelAddProduct = product => {
        let newCart = [...cart, product]
        setCart(newCart)
        const count = newCart.filter(pd => pd.key === product.key)
        addToDatabaseCart(product.key, count.length)
    }
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
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;