import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BagsGearBackPacks = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div className="navbar-accodian-level2">
        Backpacks
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div className="Navbar-accordian-items">
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks-c224451">Shop all Backpacks</a>
            </div>
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/womens-backpacks-c268801">Women's</a>
            </div>     
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/mens-backpacks-c298772">Men's</a>
            </div> 
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/school-backpacks-c591786">School</a>
            </div>          
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/commuter-backpacks-c365273">Commuter</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/kids-backpacks-c224503">Kids'</a>
            </div>    
            <div className="navbar-accordian-item">
            <a className="navbar-accordian-item-link2" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/fanny-packs-and-totes-c591785">Funny Pack & Bags</a>
            </div>    
        </div>
      )}
    </div>
    )
}

export default BagsGearBackPacks