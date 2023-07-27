import './NavBar.css'
import NavHeader from './NavHeader'
import NavList from './NavList'
import { useContext, useState, useEffect } from 'react'
import NavigationContext from '../../context/NavigationContext'
import ThirdNavHeader from './ThirdNavHeader'

const NavBar = () => {
    const {currentNav} = useContext(NavigationContext)
    const  [scrolled, setScrolled] = useState("default");

    const scrolledDistance1 = 10;
    const scrolledDistance2 = 500;

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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    if (scrolled === 'default') {
        return (
        <div className='sticky-header'>
        <NavList />
        <NavHeader />
        </div>
    )
        }

    if (scrolled === "hidden") {
        return (
            <div className='sticky-header'>
        <NavHeader />
        </div>
        )
    }

    if (scrolled === "small") {
        return (
            <div className='sticky-header'>
        <ThirdNavHeader />
        </div>
        )
    }

}

export default NavBar