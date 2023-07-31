import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const LittleKids = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level2">
        Little Kids (2-7)
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/kids/little-kids-2-7-c226757">Shop All Little Kids (2-7)</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/kids/little-kids-2-7/toddler-boys-apparel-c348298">Boys'</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/kids/little-kids-2-7/toddler-girls-apparel-c348299">Girls'</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/kids/little-kids-2-7/toddler-accessories-c226761">Accesories</a>
            </div>         
        </div>
      )}
    </div>
    )
}

export default LittleKids