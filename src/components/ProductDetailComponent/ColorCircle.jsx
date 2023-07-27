
import React from 'react';
import './ProductDetail.css';


const ColorCircle = ({ colors, clickHandler, onHover, onHoverEnd, isSelected }) => {
    const style = {
        background: `linear-gradient(45deg, ${colors[0]} 50%, ${colors[1]} 50%)`
    };
    
    return (
        <div 
          className={`color-circle ${isSelected ? 'selected' : ''}`} 
          style={style} 
          onClick={clickHandler}
          onMouseOver={onHover}
          onMouseOut={onHoverEnd}
        >
        </div>
    );
}

export default ColorCircle;

