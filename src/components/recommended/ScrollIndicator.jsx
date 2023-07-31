import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = ({ currentIndex, totalItems }) => {
  return (
    <div className="scroll-indicator">
      {Array.from({ length: totalItems }).map((_, index) => (
        <div
          key={index}
          className={`scroll-circle ${currentIndex === index ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;