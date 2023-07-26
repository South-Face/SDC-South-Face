import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Description = ({productId}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`https://southface.onrender.com/products/${productId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.length > 0 && data[0].description) {
                    setDescription(data[0].description);
                } else {
                    console.log('No description found');
                }
            })
            .catch(error => console.error('Error:', error));
    }, [productId]);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="description-component" onClick={toggleExpansion}>
            <div className="description-title">
                Description
                <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </div>
            {isExpanded && <div className="description-content">{description}</div>}
        </div>
    );
};

export default Description;
