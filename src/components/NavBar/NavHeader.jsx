import NavComponent from "./NavComponent"
import NavTools from "./NavTools"
import logo from "../Footer/img/south_face_removebg.png";



const NavHeader = () => {
 
    return (
        <header className="nav-header">
            <a className="southface-logo" href="https://www.thenorthface.com/en-us">
                <img width="97px" height="45px" src={logo}  />
            </a>
            <div className="header-actions">
                <NavComponent />
                <div>
                    <NavTools />
                </div>
            </div>
        </header>
    )
}

export default NavHeader