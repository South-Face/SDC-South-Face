import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const AboutUsTechnology = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Our Technology
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Our Technology</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">VECTIV</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">FUTURELIGHT™</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">ThermoBall Eco</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">FlashDry</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">DryVent</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Fleece</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">TKA</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="">Goose Down</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default AboutUsTechnology