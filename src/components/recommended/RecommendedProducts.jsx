import React, { useState, useEffect } from 'react';
import './RecommendedProducts.css';
import Title from './Title';
import ScrollIndicator from './ScrollIndicator';

function RecommendedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://southface.onrender.com/recommendedProducts')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="recommended-products-outer">
      {/* Wrap the existing .recommended-products div inside the outer container */}
        <Title text="Just For You" />
      <div className="recommended-products">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <a href={"https://www.thenorthface.com/en-us/bags-and-gear/backpacks-c224451/womens-borealis-backpack-pNF0A52SI?color=22B"} target="_blank" rel="noopener noreferrer">
              <img src={product.imageurl} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
            </a>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <ScrollIndicator currentIndex={0} totalItems={products.length} />
    </div>
  );
}

export default RecommendedProducts;
