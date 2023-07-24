import { PiBag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const NavTools = () => {
    return (
        <>
        <form className="search-comp">
            <CiSearch />
            <input className="search-bar" placeholder="Search..." type="text"/>
        </form>
        < PiBag />
        </>
    )
}

export default NavTools