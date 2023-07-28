import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Collections from "./Collections";
import WomensFeatured from "./WomenFeatured";
import WomensShopActivity from "./WomensShopActivity";
import WomensJacketsVest from "./WomensJacketsVest";
import WomensFleece from "./WomensFleece";
import WomensTops from "./WomensTops";
import WomensBottoms from "./WomensBottoms";
import WomensFootwear from "./WomensFootwear";
import WomensAccessories from "./WomensAccessories";

const NavMenuContentWomens = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Womens's
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop All</a>
            </div>
            <div>
            <a href="">Sale</a>
            </div>
            <WomensFeatured />
            <WomensShopActivity />
            <WomensJacketsVest />
            <WomensFleece />
            <WomensTops />
            <WomensBottoms />
            <WomensFootwear />
            <WomensAccessories />
            <Collections />
           
        </div>
        
      )}
    </div>
    )
}

export default NavMenuContentWomens