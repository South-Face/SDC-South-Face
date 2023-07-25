import React, { useEffect, useState } from 'react';
import AddToCartButton from './AddToCartButton';
import './ProductDetail.css'; 



const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data[0]);
            })
            .catch(error => console.error('Error:', error));
    }, [productId]);

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <p>Pay in 4 interest-free payments of $20.00. Klarna. <a href="#">Learn more</a></p>
            <div className="reviews-box">
                {/* review component*/}
            </div>
            <div className="select-color">
                {/* select color component*/}
            </div>
            <AddToCartButton text="Add to Cart" />
            <div className="find-in-store">
                {/* find in store component*/}
            </div>
            <h3>{product.description}</h3>
        </div>
    );
};

export default ProductDetails;
