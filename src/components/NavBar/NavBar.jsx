import './NavBar.css'
import NavHeader from './NavHeader'
import NavList from './NavList'
import { useContext, useState, useEffect } from 'react'
import NavigationContext from '../../context/NavigationContext'
import ThirdNavHeader from './ThirdNavHeader'
import NavBarSmallWidth from './NavBarSmallWidth'

const NavBar = () => {
    const {currentNav} = useContext(NavigationContext)
    const  [scrolled, setScrolled] = useState("default");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const scrolledDistance1 = 10;
    const scrolledDistance2 = 650;

    const handleScroll = () => {
        const scrollY = window.scrollY;
    if (scrollY > scrolledDistance2) {
        setScrolled('small');
    } else if (scrollY > scrolledDistance1) {
        setScrolled('hidden');
    } else {
        setScrolled('default');
    }
    }

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const isWindowUnderCertainWidth = () => {
        return windowWidth < 1023;
      };

    if (scrolled === 'default' && !isWindowUnderCertainWidth()) {
        return (
        <div className='sticky-header'>
        <NavList />
        <NavHeader />
        </div>
    )
        }

    if (scrolled === "hidden" && !isWindowUnderCertainWidth()) {
        return (
            <div className='sticky-header'>
        <NavHeader />
        </div>
        )
    }

    if (scrolled === "small" && !isWindowUnderCertainWidth()) {
        return (
            <div className='sticky-header'>
        <ThirdNavHeader />
        </div>
        )
    }

    if (isWindowUnderCertainWidth()) {
        return (
            <div className='sticky-header'>
            <NavBarSmallWidth />
            </div>
        )
    }

}

export default NavBar