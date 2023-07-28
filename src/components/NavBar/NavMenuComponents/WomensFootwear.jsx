import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const WomensFootwear = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Footwear
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop All Footwear</a>
            </div>
            <div>
            <a href="">Hike</a>
            </div>
            <div>
            <a href="">Trail Run</a>
            </div>
            <div>
            <a href="">Boots</a>
            </div>
            <div>
            <a href="">Sneakers</a>
            </div>
            <div>
            <a href="">Sandals</a>
            </div>     
            <div>
            <a href="">Slippers</a>
            </div>   
                     
        </div>
      )}
    </div>
    )
}

export default WomensFootwear