import React, { useEffect, useState } from 'react';
import './ProductDetail.css'; 

const ProductImages = ({ productId }) => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/ProductImages/${productId}`)
            .then(response => response.json())
            .then(data => {
                const images = data.map(row => row.imageurl);
                setUrls(images);
            })
            .catch(error => console.error('Error:', error));
    }, [productId]);

    return (
        <div className="image-gallery">
            {urls.map((url, index) => (
                <img 
                    key={index} 
                    className="product-image" 
                    src={url} 
                    alt="" 
                />
            ))}
        </div>
    );
};

export default ProductImages;
