import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FootwearKids = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level2">
        Kids'
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/kids/footwear-c311774">Shop all Kids'</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/kids/girls-footwear-c211745">Girls' Footwear</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/kids/boys-footwear-c211739">Boys' Footwear</a>
            </div>                     
        </div>
      )}
    </div>
    )
}

export default FootwearKids