import { PiBag } from "react-icons/pi";
import { GoX } from "react-icons/go"
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from 'react-icons/ci'
import { useState } from "react";
import NavMenuContent from "./NavMenuContent";
import logo from "../Footer/img/south_face_removebg.png";

const NavBarSmallWidth = () => {
    const [currentBar, setCurrentBar] = useState('none');

    if (!currentBar) {
        setCurrentBar('none');
    }

    const changeBar = (id) => {
        if (currentBar === id) {
            setCurrentBar('none');
          } else {
            setCurrentBar(id);
          }
    }

    if (currentBar === 'none') {
    return (
        <div className="navBar-smallWidth">
            <a className="southface-logo" href="https://www.thenorthface.com/en-us">
                <img width="80px" height="35px" src={logo}  />
            </a>
            <div>
                <CiSearch id="search" onClick={(e) => {changeBar(e.target.id)}} className="search-comp-sw"></CiSearch>
                <a href="https://www.thenorthface.com/en-us/cart"><PiBag className="search-comp-bag-sw"></PiBag></a>
                <CiMenuBurger id="menu" onClick={(e) => {changeBar(e.target.id)}} className="search-comp-menu"></CiMenuBurger>           
            </div>
        </div>
    )
    }

    if (currentBar === 'search') {
        return (
            <div>
            <div className="navBar-smallWidth">
            <a className="southface-logo" href="https://www.thenorthface.com/en-us">
                <img width="80px" height="35px" src={logo}  />
            </a>
            <div>
            <GoX id="search" onClick={(e) => {changeBar(e.target.id)}} className="search-comp-sw"></GoX>
                <a href=""><PiBag className="search-comp-bag-sw"></PiBag></a>
                <CiMenuBurger id="menu" onClick={(e) => {changeBar(e.target.id)}} className="search-comp-menu"></CiMenuBurger>           
            </div>           
        </div>
        <form className="search-sw-form" action="">
            <CiSearch className="serch-comp-sw-active"></CiSearch>
            <input className="search-bar" placeholder="Search..." type="text"/>
            </form>
        </div>
        )
    }

    if (currentBar === 'menu') {
        return (
            <div>
            <div className="navBar-smallWidth">
                <a className="southface-logo" href="https://www.thenorthface.com/en-us">
                    <img width="80px" height="35px" src={logo}  />
                </a>
                <div>
                    <CiSearch id="search" onClick={(e) => {changeBar(e.target.id)}} className="search-comp-sw"></CiSearch>
                    <a href=""><PiBag className="search-comp-bag-sw"></PiBag></a>
                    <GoX id="menu" onClick={(e) => {changeBar(e.target.id)}} className="search-comp-menu"></GoX>           
                </div>
                
            </div>
            <NavMenuContent />
            </div>
        )
    }
 }

export default NavBarSmallWidth