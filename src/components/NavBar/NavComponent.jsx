import { useContext } from "react" 
import NavigationContext from "../../context/NavigationContext" 
import SaleComponent from "./SaleComponent"
import MensComponent from "./MensComponent"
import WomensComponent from "./WomensComponent"
import KidsComponent from "./KidsComponent"
import FootwearComponent from "./FootwearComponent"
import BagsGearComponent from "./BagsGearComponent"
import AboutUsComponent from "./AboutUsComponent"


const NavComponent = () => {
    const {currentNav} = useContext(NavigationContext)
    const {changeNav} = useContext(NavigationContext)

    if (currentNav === 'none') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" onMouseOver={(e) => {changeNav(e.target.id)}} >
            <a className="nav-component-item-link"  href="https://www.thenorthface.com/en-us/sale" id="sale">Sale</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}}  id="mens" href="https://www.thenorthface.com/en-us/mens">Men's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}}  id="womens" href="https://www.thenorthface.com/en-us/womens">Women's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">About Us</a>
        </div>
        </nav>
    )
    }

    if (currentNav === 'sale') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" onMouseLeave={() => {changeNav("none")}}>
            <a className="nav-component-item-link"  href="https://www.thenorthface.com/en-us/sale" >Sale</a>
            <SaleComponent onMouseOver={(e) => {changeNav(e.target.id)}}  id="sale" ></SaleComponent>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="mens" href="https://www.thenorthface.com/en-us/mens">Men's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="womens" href="https://www.thenorthface.com/en-us/womens">Women's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">About Us</a>
        </div>
        </nav>
    )
    }

    if (currentNav === 'mens') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" >
            <a className="nav-component-item-link" onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} href="https://www.thenorthface.com/en-us/sale" id="sale">Sale</a>
        </div>
        <div className="nav-component-item" onMouseLeave={() => {changeNav("none")}}>
            <a className="nav-component-item-link" href="https://www.thenorthface.com/en-us/mens">Men's</a>
            <MensComponent onMouseOver={(e) => {changeNav(e.target.id)}} id="mens" ></MensComponent>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="womens" href="https://www.thenorthface.com/en-us/womens">Women's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">About Us</a>
        </div>
        </nav>
    )
    }

    if (currentNav === 'womens') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" >
            <a className="nav-component-item-link" onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} href="https://www.thenorthface.com/en-us/sale" id="sale">Sale</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="mens" href="https://www.thenorthface.com/en-us/mens">Men's</a>
        </div>
        <div className="nav-component-item" onMouseLeave={() => {changeNav("none")}}>
            <a className="nav-component-item-link" href="https://www.thenorthface.com/en-us/womens">Women's</a>
            <WomensComponent onMouseOver={(e) => {changeNav(e.target.id)}} id="womens"></WomensComponent>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">About Us</a>
        </div>
        </nav>
    )
    }

    if (currentNav === 'kids') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" >
            <a className="nav-component-item-link" onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} href="https://www.thenorthface.com/en-us/sale" id="sale">Sale</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="mens" href="https://www.thenorthface.com/en-us/mens">Men's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="womens" href="https://www.thenorthface.com/en-us/womens">Women's</a>
        </div>
        <div className="nav-component-item"  onMouseLeave={() => {changeNav("none")}} >
            <a className="nav-component-item-link" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
            <KidsComponent onMouseOver={(e) => {changeNav(e.target.id)}} id="kids" ></KidsComponent>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">About Us</a>
        </div>
        </nav>
    )
    }

    if (currentNav === 'footwear') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" >
            <a className="nav-component-item-link" onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} href="https://www.thenorthface.com/en-us/sale" id="sale">Sale</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="mens" href="https://www.thenorthface.com/en-us/mens">Men's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="womens" href="https://www.thenorthface.com/en-us/womens">Women's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
        </div>
        <div className="nav-component-item" onMouseLeave={() => {changeNav("none")}}>
            <a className="nav-component-item-link"  href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
            <FootwearComponent  onMouseOver={(e) => {changeNav(e.target.id)}} id="footwear" ></FootwearComponent>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">About Us</a>
        </div>
        </nav>
    )
    }

    if (currentNav === 'bags/gear') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" >
            <a className="nav-component-item-link" onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} href="https://www.thenorthface.com/en-us/sale" id="sale">Sale</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="mens" href="https://www.thenorthface.com/en-us/mens">Men's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="womens" href="https://www.thenorthface.com/en-us/womens">Women's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
        </div>
        <div className="nav-component-item"  onMouseLeave={() => {changeNav("none")}} >
            <a className="nav-component-item-link"href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
            <BagsGearComponent onMouseOver={(e) => {changeNav(e.target.id)}} id="bags/gear" ></BagsGearComponent>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="aboutUs" href="https://www.thenorthface.com/en-us/about-us">About Us</a>
        </div>
        </nav>
    )
    }

    if (currentNav === 'aboutUs') {
    return (
        <nav className="nav-components">
        <div className="nav-component-item" >
            <a className="nav-component-item-link" onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} href="https://www.thenorthface.com/en-us/sale" id="sale">Sale</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="mens" href="https://www.thenorthface.com/en-us/mens">Men's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="womens" href="https://www.thenorthface.com/en-us/womens">Women's</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="kids" href="https://www.thenorthface.com/en-us/kids">Kids'</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="footwear" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Footwear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  onMouseOver={(e) => {changeNav(e.target.id)}} onMouseLeave={() => {changeNav("none")}} id="bags/gear" href="https://www.thenorthface.com/en-us/equipment">Bags & Gear</a>
        </div>
        <div className="nav-component-item">
            <a className="nav-component-item-link"  href="https://www.thenorthfacerenewed.com/?_gl=1*1b9r8a2*_ga*MTQyNjI2MTI3OC4xNjg5Nzk0Nzk4*_ga_950L7P08N5*MTY5MDI0ODc0MC4yNy4xLjE2OTAyNDk3MjQuMzMuMC4w&_ga=2.254447176.1987180916.1689794798-1426261278.1689794798&_gac=1.123008505.1690249627.Cj0KCQjwk96lBhDHARIsAEKO4xZIGsioS3ccCqvaUqedLQkFgo1FK9R1VvjpFDlFTvocq1ZWqY9mJSUaAkAMEALw_wcB">Renewed</a>
        </div>
        <div className="nav-component-item" onMouseLeave={() => {changeNav("none")}} >
            <a className="nav-component-item-link"  href="https://www.thenorthface.com/en-us/about-us">About Us</a>
            <AboutUsComponent onMouseOver={(e) => {changeNav(e.target.id)}} id="aboutUs" ></AboutUsComponent>
        </div>
        </nav>
    )
    }
}

export default NavComponent