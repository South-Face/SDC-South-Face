import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavMenuContentSale = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Sale
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop Sale</a>
            </div>
            <div>
            <a href="">Women's Sale</a>
            </div>
            <div>
            <a href="">Men's Sale</a>
            </div>
            <div>
            <a href="">Kids' Sale</a>
            </div>
            <div>
            <a href="">Bags & Gear Sale</a>
            </div>
            <div>
            <a href="">Women's Footwear Sale</a>
            </div>
            <div>
            <a href="">Men's Footwear Sale</a>
            </div>
            <div>
            <a href="">Shop All Sale</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default NavMenuContentSale