import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductImageCarousel.css'; 

const ProductImageCarousel = ({ productId }) => {
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
        <Carousel className="carousel-gallery" showThumbs={false}>
            {urls.map((url, index) => (
                <div key={index}>
                    <img src={url} alt={`product-${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default ProductImageCarousel;
