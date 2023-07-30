import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const AboutUsWho = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Who We Are
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Who We Are</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Our History</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Our Athletes</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Athlete Development Program</a>
            </div>          
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Our Icons</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">XPLR Pass</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">The Approach</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Explore Fund Council</a>
            </div>    
        </div>
      )}
    </div>
    )
}

export default AboutUsWho