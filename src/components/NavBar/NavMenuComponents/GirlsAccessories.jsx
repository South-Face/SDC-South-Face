import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const GirlsAccessories = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Girls' Accessories
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop All Girls' Accessories</a>
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

export default GirlsAccessories