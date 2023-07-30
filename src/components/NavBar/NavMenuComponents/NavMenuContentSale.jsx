import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavMenuContentSale = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div  onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Sale
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item" >
            <a  className="navbar-accordian-item-link" href="">Shop Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Women's Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Men's Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Kids' Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Bags & Gear Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Women's Footwear Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Men's Footwear Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop All Sale</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default NavMenuContentSale