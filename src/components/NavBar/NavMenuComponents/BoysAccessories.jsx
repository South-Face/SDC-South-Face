import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BoysAccessories = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Boys' Accessories
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop All Boys' Accessories</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Beanies</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Hats</a>
            </div>        
        </div>
      )}
    </div>
    )
}

export default BoysAccessories