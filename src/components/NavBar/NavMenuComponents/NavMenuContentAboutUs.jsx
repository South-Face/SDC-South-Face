import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import AboutUsWho from "./AboutUsWho";
import AboutUsSustainability from "./AboutUsSustainability";
import AboutUsTechnology from "./AboutUsTechnology";

const NavMenuContentBagsGear = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        About Us
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <AboutUsWho />
            <AboutUsSustainability />
            <AboutUsTechnology />
        </div>
        
      )}
    </div>
    )
}

export default NavMenuContentBagsGear