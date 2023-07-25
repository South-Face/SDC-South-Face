import { PiBag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const NavTools = () => {
    return (
        <div className="search-comp">
        <form  className="vf-search-bar">
            <CiSearch className="search-comp-mg"></CiSearch>
            <input className="search-bar" placeholder="Search..." type="text"/>
        </form>
        <a  href="https://www.thenorthface.com/en-us/cart">
            < PiBag className="search-comp-bag" ></PiBag>
        </a>
        </div>
    )
}

export default NavTools