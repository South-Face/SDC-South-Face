import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BagsGearLuggage = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Luggage and Duffels
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop all Luggage and Duffels</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Duffel Bags</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Rolling Luggage</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Carry On</a>
            </div>          
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Travel Accessories</a>
            </div>      
        </div>
      )}
    </div>
    )
}

export default BagsGearLuggage