import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BagsGearTechnical = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Technical Packs
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop all Technical Packs</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Hike</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Trail Run</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Backpacking</a>
            </div>          
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Climb</a>
            </div>      
        </div>
      )}
    </div>
    )
}

export default BagsGearTechnical