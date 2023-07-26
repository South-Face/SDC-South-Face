import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ProductDetail.css';

function Features() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="features-component" onClick={toggleExpansion}>
      <div className="features-title">
        Features
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && 
        <div className='features-content'>
          <img src="/Images/features.jpg" className="product-detail-image" alt="features"/>
        </div>
      }
    </div>
  );
}

export default Features;
