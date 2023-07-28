import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const WomensTops = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Tops
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop All Tops</a>
            </div>
            <div>
            <a href="">T-Shirts</a>
            </div>
            <div>
            <a href="">Hoodie & Sweatshirts</a>
            </div>
            <div>
            <a href="">Tank Tops</a>
            </div>
            <div>
            <a href="">Active</a>
            </div>           
        </div>
      )}
    </div>
    )
}

export default WomensTops