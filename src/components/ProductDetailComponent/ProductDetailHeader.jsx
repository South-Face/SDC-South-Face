import React from 'react';

const ProductDetailsHeader = ({ name, price }) => {
    return (
        <>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <p>Pay in 4 interest-free payments of $20.00. Klarna.<a id="learn-more" href="#">Learn more</a>
            </p>
        </>
    );
};

export default ProductDetailsHeader;
