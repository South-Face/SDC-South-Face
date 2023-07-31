import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavMenuContentRenewed = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Renewed
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthfacerenewed.com/?_gl=1*1pao8iz*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDc3MjI4OS42MS4xLjE2OTA3NzcwNjUuNDUuMC4w&_ga=2.254969416.1987180916.1689794798-1426261278.1689794798&_gac=1.12391494.1690772406.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Shop Renewed</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default NavMenuContentRenewed