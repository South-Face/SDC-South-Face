import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import KidsFeatured from "./KidsFeatured";
import KidsShopActivity from "./KidsShopActivity";
import GirlsApparel from "./GirlsApparel";
import GirlsAccessories from "./GirlsAccessories";
import BoysApparel from "./BoysApparel";
import BoysAccessories from "./BoysAccessories";
import LittleKids from "./LittleKids";
import Baby from "./Baby";
import KidsFootwear from "./KidsFootwear";

const NavMenuContentKids = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Kids'
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/kids">Shop All</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale/kids-sale-c317776">Sale</a>
            </div>
            <KidsFeatured />
            <KidsShopActivity />
            <GirlsApparel />
            <GirlsAccessories />
            <BoysApparel />
            <BoysAccessories />
            <LittleKids />
            <Baby />
            <KidsFootwear />
        </div>
        
      )}
    </div>
    )
}

export default NavMenuContentKids