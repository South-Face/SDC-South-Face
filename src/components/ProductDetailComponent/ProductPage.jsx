import React, { useState, useEffect } from 'react';
import ProductImages from './ProductImages';
import ProductImageCarousel from './ProductImageCarousel';
import ProductDetails from './ProductDetails';
import './ProductDetail.css'; 

const ProductPage = () => {
    const [isViewportLessThan1024, setIsViewportLessThan1024] = useState(window.innerWidth <= 1023);

    useEffect(() => {
        const handleResize = () => {
            setIsViewportLessThan1024(window.innerWidth <= 1023);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const productId = 1;

    return (
        <div className="product-page">
            {isViewportLessThan1024 ? (
                <>
                    <ProductImageCarousel productId={productId} />
                    <ProductDetails productId={productId} />
                </>
            ) : (
                <>
                    <ProductImages productId={productId} />
                    <ProductDetails productId={productId} />
                </>
            )}
        </div>
    );
};

export default ProductPage;
