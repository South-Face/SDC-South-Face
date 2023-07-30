import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import BagsGearFeatured from './BagsGearFeatured'
import BagsGearBackPacks from "./BagsGearBackpacks";
import BagsGearTechnical from "./BagsGearTechnical";
import BagsGearLuggage from "./BagsGearLuggage";
import BagsGearGear from "./BagsGearGear";

const NavMenuContentBagsGear = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Bags & Gear
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Shop All</a>
            </div>           
            <BagsGearFeatured />
            <BagsGearBackPacks />
            <BagsGearTechnical />
            <BagsGearLuggage />
            <BagsGearGear />
        </div>
        
      )}
    </div>
    )
}

export default NavMenuContentBagsGear