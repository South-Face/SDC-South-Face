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
      <div className="navbar-accodian-level2">
        Technical Packs
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/technical-packs-c224452">Shop all Technical Packs</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/technical-packs/hike-c224525">Hike</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/technical-packs/trail-run-packs-c798783">Trail Run</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/technical-packs/backpacking-c224524">Backpacking</a>
            </div>          
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/technical-packs/climbing-c224523">Climb</a>
            </div>      
        </div>
      )}
    </div>
    )
}

export default BagsGearTechnical