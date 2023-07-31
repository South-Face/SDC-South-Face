
import React, { useEffect, useState } from 'react';
import './ReccProducts.css';
import ProductPrice from './ProductPrice';
import Images from './Images';
import Title from './Title';
import Banner from './Banner';

const ReccProducts = () => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch('https://southface.onrender.com/recommendedProducts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setProducts(data);
        const urls = data.map((row) => row.imageurl); // Use "imageurl" instead of "imageUrl"
        setImageUrls(urls);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="recc-products-container">
      <Title text="Just For You" />
      <Banner imageUrls={imageUrls} />

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-item" key={product.recommendedproductsid}> {/* Use recommendedproductsid instead of recommendedProductsId */}
            <Images recommendedProductsId={product.recommendedproductsid} /> {/* Use recommendedproductsid instead of recommendedProductsId */}
            <h3>{product.name}</h3>
            <ProductPrice price={product.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReccProducts;
