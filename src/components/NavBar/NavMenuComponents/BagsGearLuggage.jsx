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
      <div className="navbar-accodian-level2">
        Luggage and Duffels
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/luggage-and-duffels-c224453">Shop all Luggage and Duffels</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/luggage-and-duffels/duffel-bags-c224547">Duffel Bags</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/luggage-and-duffels/rolling-luggage-c224545">Rolling Luggage</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/luggage-and-duffels/carry-on-c224544">Carry On</a>
            </div>          
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/luggage-and-duffels/travel-accessories-c224548">Travel Accessories</a>
            </div>      
        </div>
      )}
    </div>
    )
}

export default BagsGearLuggage