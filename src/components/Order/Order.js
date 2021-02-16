import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import { useHistory } from 'react-router-dom';
import './order.css'

const Order = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(Object.keys(getDatabaseCart()).map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = getDatabaseCart()[key];
            return product
        }))
    }, [])


    const removeHandler = (removeProduct) => {
        setCart(cart.filter(pd => pd.key !== removeProduct))
        addToDatabaseCart(removeProduct)
    }
    let [order] = useState(false);
    const history = useHistory()
    const handelCheckout = () => {
        history.push('/shipment')
    }

    return (
        <div className='container'>
            <div className="shop-container">
                <div className="product-container">
                    <h1>{order && "Thanks for Order"}</h1>
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.key}
                            product={pd}
                            removeHandler={removeHandler}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} >
                        <button
                            onClick={handelCheckout}
                            className="main-btn">Proceed Checkout</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;


const ReviewItem = (props) => {
    const { name, seller, stock, price, quantity } = props.product
    return (
        <>
            <div className="product-info">
                <h5>
                    {name}
                </h5>
                <p>by: {seller}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Only {stock} left - order soon</p>
                <button
                    onClick={() => props.removeHandler(props.product.key)}
                    className='main-btn'
                >
                    Remove Product </button>
            </div>
        </>
    )
}