import React from 'react';
import './ProductPrice.css'; 

const ProductPrice = ({ productName, price }) => {
  return (
    <div className="product-price-container">
      <span className="product-name">{productName}</span>
      <span className="product-price-value">${price}</span>
    </div>
  );
};

export default ProductPrice;
