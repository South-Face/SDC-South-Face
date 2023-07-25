import React from 'react';
import './ProductDetail.css';

const AddToCartButton = ({ text }) => {
    return (
        <button className="addToCartButton">{text}</button>
    );
};

export default AddToCartButton;
