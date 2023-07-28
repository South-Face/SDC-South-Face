import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io"; 

const NavRoutes = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const isWindowUnderCertainWidth = () => {
        return windowWidth < 1023;
      };

      if (!isWindowUnderCertainWidth()) {
    return (
        <ol className="nav-routes">
            <li>
                <a className="nav-routes-link" href="https://www.thenorthface.com/en-us">Home</a>
                <span className="nav-routes-seperator">/</span>
            </li>
            <li>
                <a className="nav-routes-link" href="https://www.thenorthface.com/en-us/bags-and-gear-c211747">Bags & Gear</a>
                <span className="nav-routes-seperator">/</span>
            </li>
            <li>
                <a className="nav-routes-link" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks-c224451">Backpacks</a>
                <span className="nav-routes-seperator">/</span>
            </li>
            <li>
                <a className="nav-routes-link" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/womens-backpacks-c268801">Women's Backpacks</a>
            </li>
        </ol>
        )
    }

    if (isWindowUnderCertainWidth()) {
        return (
            <ol className="nav-routes">
                <a href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks-c224451"><IoIosArrowBack className="nav-routes-backarrow"></IoIosArrowBack></a>
            <li>
                 
                <a className="nav-routes-link" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks-c224451">Backpacks</a>
                <span className="nav-routes-seperator">/</span>
            </li>
            <li>
                <a className="nav-routes-link" href="https://www.thenorthface.com/en-us/bags-and-gear/backpacks/womens-backpacks-c268801">Women's Backpacks</a>
            </li>
        </ol>
        )
    }
}

export default NavRoutes