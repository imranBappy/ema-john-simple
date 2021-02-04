import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import './order.css'
const Order = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(Object.keys(getDatabaseCart()).map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = getDatabaseCart()[key]
            return product
        }))
    })


    return (
        <div className='container'>
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd} />)
            }
        </div>
    );
};

export default Order;


const ReviewItem = (props) => {
    const { name, seller, stock, price, quantity } = props.product
    return (
        <>
            <div className="product-info">
                <h3>
                    {name}
                </h3>
                <p>by: {seller}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Only {stock} left - order soon</p>

            </div>
        </>
    )
}