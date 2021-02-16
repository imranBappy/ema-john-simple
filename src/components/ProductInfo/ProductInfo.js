import React from 'react';
import '../Product/product.css'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductInfo = () => {
    let { product_Key } = useParams();
    const product = fakeData.find(pd => pd.key === product_Key)
    return (
        <div style={{ marginBottom: '130px' }} className="container">
            <Product showAddToCart={false} product={product} />
        </div>
    );
};

export default ProductInfo;