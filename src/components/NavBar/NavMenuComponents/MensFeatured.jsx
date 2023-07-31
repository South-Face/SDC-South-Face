import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const MensFeatured = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level2">
        Featured
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/mens/mens-featured/mens-new-arrivals-c226102">New Arrivals</a>
            </div>
            <div className="navbar-accordian-item"> 
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/mens/mens-featured/mens-best-sellers-c226103">Best Sellers</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/shop-all/collections/tek-piping-c829843">Tek Piping</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default MensFeatured