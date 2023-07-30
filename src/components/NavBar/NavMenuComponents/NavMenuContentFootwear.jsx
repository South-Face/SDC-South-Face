import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FootwearFeatured from "./FootwearFeatured";
import FootwearMens from "./FootwearMens";
import FootwearWomens from "./FootwearWomens";
import FootwearKids from "./FootwearKids";

const NavMenuContentFootwear = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Footwear
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop All</a>
            </div>
            <FootwearFeatured />  
            <FootwearMens />     
            <FootwearWomens />    
            <FootwearKids />
        </div>
      )}
    </div>
    )
}

export default NavMenuContentFootwear