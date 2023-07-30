import NavMenuContentSale from './NavMenuComponents/NavMenuContentSale'
import NavMenuContentRenewed from './NavMenuComponents/NavMenuContentRenewed'
import NavMenuContentMens from './NavMenuComponents/NavMenuContentMens'
import NavMenuContentWomens from './NavMenuComponents/NavMenuContentWomens'
import NavMenuContentKids from './NavMenuComponents/NavMenuContentKids'
import NavMenuContentFootwear from './NavMenuComponents/NavMenuContentFootwear'
import NavMenuContentBagsGear from './NavMenuComponents/NavMenuContentBagsGear'
import NavMenuContentAboutUs from './NavMenuComponents/NavMenuContentAboutUs'

const NavMenuContent = () => {
    return (
        <>
        <div className='nav-dropdowns-smallwidth'>
        <NavMenuContentSale />
        <NavMenuContentMens />
        <NavMenuContentWomens />
        <NavMenuContentKids />
        <NavMenuContentFootwear />
        <NavMenuContentBagsGear />
        <NavMenuContentRenewed />
        <NavMenuContentAboutUs />
        </div>
        <div>
        <ul className='nav-dropdown-list'>
            <li className='nav-dropdown-list-item'>
                <a className='nav-dropdown-list-item-link' href="">Sign In</a>
            </li>
            <li className='nav-dropdown-list-item'>
            <img className="flag" src="https://www.thenorthface.com/_nuxt/img/country-us-icon.35f5bdb.svg" />
                <a className='nav-dropdown-list-item-link' href="">English</a>
            </li>
            <li className='nav-dropdown-list-item'>
                <a className='nav-dropdown-list-item-link' href="">Order Status</a>
            </li>
            <li className='nav-dropdown-list-item'>
                <a className='nav-dropdown-list-item-link' href="">Join XPLR Pass™</a>
            </li>
            <li className='nav-dropdown-list-item'>
                <a className='nav-dropdown-list-item-link' href="">Find a store</a>
            </li>
            <li className='nav-dropdown-list-item'>
                <a className='nav-dropdown-list-item-link' href="">Gift Cards</a>
            </li>
            <li className='nav-dropdown-list-item'>
                <a className='nav-dropdown-list-item-link' href="">Help</a>
            </li>
            <li className='nav-dropdown-list-item'>
                <a className='nav-dropdown-list-item-link' href="">Live Chat</a>
            </li>
        </ul>
        </div>
        </>
    )
}

export default NavMenuContent