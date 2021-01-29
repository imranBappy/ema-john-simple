import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
    const fist10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(fist10)
    let [cart, setCart] = useState([])

    const handelAddProduct = product => {
        let newCart = [...cart, product]
        setCart(newCart)
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