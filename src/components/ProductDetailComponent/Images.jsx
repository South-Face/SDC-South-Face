import React, { useRef } from 'react';
import './ProductDetail.css';  

const Image = ({ url }) => {
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left - (width / 2)) / 3; // 3 is a scaling factor, adjust for your needs
        const y = (e.pageY - top - (height / 2)) / 3; // 3 is a scaling factor, adjust for your needs
        imgRef.current.style.transform = `translate(-${x}px, -${y}px) scale(2)`;
    };

    const handleMouseLeave = () => {
        imgRef.current.style.transform = "none";
    };

    return (
        <div className="single-image" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
            <img ref={imgRef} src={url} alt="" />
        </div>
    );
};

export default Image;
