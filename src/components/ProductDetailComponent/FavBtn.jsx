import React, { useState } from 'react';
import './ProductDetail.css';

const FavBtn = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <button 
            className={`favBtn ${isClicked ? 'clicked' : ''}`} 
            onClick={handleClick}
        />
    );
}

export default FavBtn;