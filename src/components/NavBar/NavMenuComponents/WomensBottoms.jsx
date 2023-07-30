import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const WomensBottoms = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Bottoms
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop All Bottoms</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shorts</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Pants</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Leggings</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Dresses & Skirts</a>
            </div>   
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Sweatpans & Joggers</a>
            </div>
                   
        </div>
      )}
    </div>
    )
}

export default WomensBottoms