import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ProductDetail.css';

function Details() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  }

  return (
    <div className="description-component" onClick={toggleExpansion}>
      <div className="description-title">
        Details
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="description-content">
<img src="./public/Images/details.jpg" className="product-detail-image" />
        </div>
      )}
    </div>
  );
}

export default Details;
