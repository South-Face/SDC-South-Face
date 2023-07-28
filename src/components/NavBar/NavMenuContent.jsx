import NavMenuContentSale from './NavMenuComponents/NavMenuContentSale'
import NavMenuContentRenewed from './NavMenuComponents/NavMenuContentRenewed'
import NavMenuContentMens from './NavMenuComponents/NavMenuContentMens'
import NavMenuContentWomens from './NavMenuComponents/NavMenuContentWomens'
import NavMenuContentKids from './NavMenuComponents/NavMenuContentKids'
import NavMenuContentFootwear from './NavMenuComponents/NavMenuContentFootwear'
import NavMenuContentBagsGear from './NavMenuComponents/NavMenuContentBagsGear'

const NavMenuContent = () => {
    return (
        <>
        <div>
        <NavMenuContentSale />
        <NavMenuContentMens />
        <NavMenuContentWomens />
        <NavMenuContentKids />
        <NavMenuContentFootwear />
        <NavMenuContentBagsGear />
        <NavMenuContentRenewed />
        {/* <NavMenuContentAboutUs /> */}
        </div>
        <div>
        <ul>
            <li>
                <a href="">Sign In</a>
            </li>
            <li>
                <a href="">English</a>
            </li>
            <li>
                <a href="">Order Status</a>
            </li>
            <li>
                <a href="">Join XPLR Pass™</a>
            </li>
            <li>
                <a href="">Find a store</a>
            </li>
            <li>
                <a href="">Gift Cards</a>
            </li>
            <li>
                <a href="">Help</a>
            </li>
            <li>
                <a href="">Live Chat</a>
            </li>
        </ul>
        </div>
        </>
    )
}

export default NavMenuContent