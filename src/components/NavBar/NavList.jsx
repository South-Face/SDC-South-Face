import { PiChatCircleLight } from "react-icons/pi";

const NavList = () => (
    <ul className="nav-list-cont">

        <li className="nav-list" >
            <a className="nav-list-item" href="https://www.thenorthface.com/en-us/select-location">
                <img className="flag" src="https://www.thenorthface.com/_nuxt/img/country-us-icon.35f5bdb.svg" />
                <div className="nav-list-text">English</div>
            </a>
        </li>
        <li className="nav-list" >
            <div>
                <a className="nav-list-item" href="https://www.thenorthface.com/en-us/order-status">
                    <div className="nav-list-text">Order Status</div>
                </a>
            </div>
        </li>
        <li className="nav-list" >
            <a className="nav-list-item" href="https://www.thenorthface.com/en-us/order-status#">
                <PiChatCircleLight />
                <div className="nav-list-text">Live chat</div>
            </a>
        </li>
        <li className="nav-list" >
            <div>
                <a className="nav-list-item" href="https://www.thenorthface.com/en-us/xplrpass">
                    <div className="nav-list-text">Join XPLR Pass™</div>
                </a>
            </div>
        </li>
        <li className="nav-list" >
            <div>
                <a className="nav-list-item" href="https://www.thenorthface.com/en-us/more/store-locator">
                    <div className="nav-list-text">Find a store</div>
                </a>
            </div>
        </li>
        <li className="nav-list" >
            <div>
                <a className="nav-list-item" href="https://www.thenorthface.com/en-us/more/gift-card">
                    <div className="nav-list-text">Gift Cards</div>
                </a>
            </div>
        </li>
        <li className="nav-list" >
            <div>
                <a className="nav-list-item" href="https://www.thenorthface.com/en-us/help">
                    <div className="nav-list-text">Help</div>
                </a>
            </div>
        </li>
        <li className="nav-list" >
            <div>
                <a className="nav-list-item" href="https://www.thenorthface.com/en-us/account/sign-in">
                    <div className="nav-list-text">Sign In</div>
                </a>
            </div>
        </li>
    </ul>
)

export default NavList