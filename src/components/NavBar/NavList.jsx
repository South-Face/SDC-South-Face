import { PiChatCircleLight } from "react-icons/pi";

const NavList = () => {
    return (
        <div className="nav-list">
        <img className="flag" src="https://www.thenorthface.com/_nuxt/img/country-us-icon.35f5bdb.svg" />
        <p>English</p>
        <p className="nav-list-item">Order Status</p>
        <  PiChatCircleLight />
        <p >Live chat</p>
        <p className="nav-list-item">Join XPLR Pass™</p>
        <p className="nav-list-item">Find a store</p>
        <p className="nav-list-item">Gift Cards</p>
        <p className="nav-list-item">Help</p>
        <p className="nav-list-item">Sign In</p>
        </div>
    )
}

export default NavList