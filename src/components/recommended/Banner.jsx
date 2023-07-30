import React from 'react';
import './Banner.css';
import ProductPrice from './ProductPrice';

const Banner = ({ imageUrls }) => {
  return (
    <div className="banner-container">
      {/* Display the images from the imageUrls */}
      {imageUrls.map((url, index) => (
        <img key={index} className="banner-image" src={url} alt="" />
      ))}
      
    </div>
    
  );
};

export default Banner;