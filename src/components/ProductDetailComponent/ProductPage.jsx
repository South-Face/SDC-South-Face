import React from 'react';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import './ProductDetail.css'; 

const ProductPage = () => {
    const productId = 1;

    return (
        <div className="product-page">
            <ProductImages productId={productId} />
            <ProductDetails productId={productId} />
        </div>
    )
}

export default ProductPage;
