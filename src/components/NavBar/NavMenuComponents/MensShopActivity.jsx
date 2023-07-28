import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const MensShopActivity = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Shop By Activity
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop By Activity</a>
            </div>
            <div>
            <a href="">Camping</a>
            </div>
            <div>
            <a href="">Hike</a>
            </div>
            <div>
            <a href="">Trail Run</a>
            </div>
            <div>
            <a href="">Climb</a>
            </div>
            <div>
            <a href="">Water / Sun</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default MensShopActivity