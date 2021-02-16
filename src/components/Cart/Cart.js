import React from 'react';
import './cart.css'

const Cart = (props) => {
    const converter = n => Number(n.toFixed(2))
    let cart = props.cart
    // const total = cart.reduce((total, prd) => converter(total) + converter(prd.price) * prd.quantity, 0)
    let total = 0;
    for (const prd of cart) {
        total = converter(total) + converter(prd.price) * prd.quantity
    }

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
            <p>Price: ${converter(total)}</p>
            <p>Shipping Cost: ${converter(shippingCost)}</p>
            <p>Tax + VAT: ${converter(tax)}</p>
            <p>Total Price: ${converter(total + tax + shippingCost)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;