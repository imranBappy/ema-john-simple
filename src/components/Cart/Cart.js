import React from 'react';
import './cart.css'
const Cart = (props) => {
    const converter = n => Number(n.toFixed(2))

    let cart = props.cart
    const total = converter(cart.reduce((total, prd) => total + prd.price, 0))
    let shippingCost = 0;
    if (total > 35) {
        shippingCost = 0
    } else if (total > 15) {
        shippingCost = 4.99
    } else if (total > 15) {
        shippingCost = 12.99
    }

    const tax = total / 10

    return (
        <div className="cart">
            <h5>Oder Summary</h5>
            <p>Items Order {cart.length}</p>
            <p>Price: ${total}</p>
            <p>Shipping Cost: ${converter(shippingCost)}</p>
            <p>Tax + VAT: ${converter(tax)}</p>
            <p>Total Price: ${converter(total + tax + shippingCost)}</p>
            <button className="main-btn">Review Your Order</button>
        </div>
    );
};

export default Cart;