import { useContext } from "react" 
import NavigationContext from "../../context/NavigationContext" 

const NavComponent = () => {
    const {changeNav} = useContext(NavigationContext)

    return (
        <nav className="nav-components">
        <div className="nav-component-item" >
            <a className="nav-component-item-link" onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} href="https://www.thenorthface.com/en-us/sale" id="sale">
                Sale
            </a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="mens" href="https://www.thenorthface.com/en-us/mens">
                Men's
            </a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="womens" href="https://www.thenorthface.com/en-us/womens">
                Women's
            </a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">
                Kids'
            </a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">
                Footwear
            </a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">
                Bags & Gear
            </a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">
                Renewed
            </a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">
                About Us
            </a>
        </div>
        </nav>
    )
}

export default NavComponent