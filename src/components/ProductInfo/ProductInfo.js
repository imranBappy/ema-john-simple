import React from 'react';
import '../Product/product.css'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductInfo = () => {
    let { product_Key } = useParams();
    const product = fakeData.find(pd => pd.key === product_Key)
    return (
        <>
            <Product showAddToCart={false} product={product} />
        </>
    );
};

export default ProductInfo;