import React, { useEffect, useState } from 'react';
import Images from './Images';
import './ProductDetail.css'; 

const ProductImages = ({ productId }) => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        fetch(`https://southface.onrender.com/ProductImages/${productId}`)
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
                <Images key={index} url={url} />
            ))}
        </div>
    );
};

export default ProductImages;
