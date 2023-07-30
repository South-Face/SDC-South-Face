import React, { useEffect, useState } from 'react';

const Images = ({ recommendedProductsId }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(`https://southface.onrender.com/recommendedProducts/${recommendedProductsId}`)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setImageUrl(data.imageUrl); // Set the imageUrl dire
      })
      .catch(error => console.error('Error:', error));
  }, [recommendedProductsId]);

  return (
    <div className="picture_gallery">
      {/* Display the single image from the imageUrl */}
      {imageUrl ? <img className="rec_product_image" src={imageUrl} alt="" /> : console.log('No image found')}
    </div>
  );
};

export default Images;