import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { key, name, img, seller, price, stock } = props.product

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} />
            </div>
            <div className="product-info">
                <h6 >
                    <Link to={`/product/${key}`}>{name}</Link>
                </h6>
                <p>by: {seller}</p>
                <p>Price: ${price}</p>
                <p>Only {stock} left - order soon</p>
                {
                    props.showAddToCart &&
                    <button
                        onClick={() => props.handelAddProduct(props.product)}
                        className='main-btn'
                    > <FontAwesomeIcon icon={faShoppingCart} />
                   add to cart</button>
                }

            </div>
        </div>
    );
};

export default Product;