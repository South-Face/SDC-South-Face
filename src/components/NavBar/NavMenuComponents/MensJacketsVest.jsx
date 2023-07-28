import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const MensJacketsVest = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Jackets & Vest
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop All Jackets & Vest</a>
            </div>
            <div>
            <a href="">Rain</a>
            </div>
            <div>
            <a href="">Insulated</a>
            </div>
            <div>
            <a href="">Windbreakers</a>
            </div>
            <div>
            <a href="">Softshell</a>
            </div>
            <div>
            <a href="">Vest</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default MensJacketsVest