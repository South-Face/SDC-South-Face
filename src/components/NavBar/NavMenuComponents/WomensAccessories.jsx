import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const WomensAccessories = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Accessories
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop All Accessories</a>
            </div>
            <div>
            <a href="">Hats</a>
            </div>
            <div>
            <a href="">Beanies</a>
            </div>
            <div>
            <a href="">Brimmers & Buckets</a>
            </div>
            <div>
            <a href="">Gloves</a>
            </div>
            <div>
            <a href="">Smartwool Socks</a>
            </div>             
        </div>
      )}
    </div>
    )
}

export default WomensAccessories