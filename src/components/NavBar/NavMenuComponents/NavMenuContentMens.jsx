import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import MensFeatured from "./MensFeatured";
import MensShopActivity from "./MensShopActivity";
import MensJacketsVest from "./MensJacketsVest";
import MensFleece from "./MensFleece";
import MensTops from "./MensTops";
import MensBottoms from "./MensBottoms";
import MensFootwear from "./MensFootwear";
import MensAccessories from "./MensAccessories";
import Collections from "./Collections";


const NavMenuContentMens = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Men's
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
            <MensFeatured />
            <MensShopActivity />
            <MensJacketsVest />
            <MensFleece />
            <MensTops />
            <MensBottoms />
            <MensFootwear />
            <MensAccessories />
            <Collections />
        </div>
        
      )}
    </div>
    )
}

export default NavMenuContentMens