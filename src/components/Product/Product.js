import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, price, stock, shipping } = props.product

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>by: {seller}</p>
                <p>Price: ${price}</p>
                <p>Only {stock} left - order soon</p>
                <button
                    onClick={() => props.handelAddProduct(props.product)}
                    className='main-btn'
                > <FontAwesomeIcon icon={faShoppingCart} />
                   add to cart</button>
            </div>
        </div>
    );
};

export default Product;