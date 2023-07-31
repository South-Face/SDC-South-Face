import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavMenuContentSale = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
      }

    return (
        <div  onClick={toggleExpansion}>
      <div className="navbar-accodian-level1">
        Sale
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item" >
            <a  className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale">Shop Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale/womens-sale-c317775">Women's Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale/mens-sale-c317774">Men's Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale/kids-sale-c317776">Kids' Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale/bags-and-gear-sale-c317778">Bags & Gear Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale/womens-footwear-sale-c829802">Women's Footwear Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale/mens-footwear-sale-c829801">Men's Footwear Sale</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link" href="https://www.thenorthface.com/en-us/sale-c829803">Shop All Sale</a>
            </div>
        </div>
      )}
    </div>
    )
}

export default NavMenuContentSale