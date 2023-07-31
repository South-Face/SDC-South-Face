import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const WomensAccessories = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level2">
        Accessories
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/womens/womens-accessories-c211724">Shop All Accessories</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/womens/womens-accessories/womens-hats-c374282">Hats</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/womens/womens-accessories/womens-beanies-c213439">Beanies</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/womens/womens-accessories/womens-brimmers-and-buckets-c829832">Brimmers & Buckets</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/womens/womens-accessories/womens-gloves-c213446">Gloves</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/womens/womens-accessories/womens-smartwool-socks-c213451">Smartwool Socks</a>
            </div>             
        </div>
      )}
    </div>
    )
}

export default WomensAccessories