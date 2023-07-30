import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BagsGearBackPacks = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Backpacks
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop all Backpacks</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Women's</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Men's</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">School</a>
            </div>          
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Commuter</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Kids'</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Funny Pack & Bags</a>
            </div>    
        </div>
      )}
    </div>
    )
}

export default BagsGearBackPacks