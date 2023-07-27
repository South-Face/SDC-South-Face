import './NavBar.css'
import NavHeader from './NavHeader'
import NavList from './NavList'
import NavRoutes from './NavRoutes'
import SaleComponent from './SaleComponent'
import MensComponent from './MensComponent'
import WomensComponent from './WomensComponent'
import KidsComponent from './KidsComponent'
import FootwearComponent from './FootwearComponent'
import BagsGearComponent from './BagsGearComponent'
import AboutUsComponent from './AboutUsComponent'
import { useContext } from 'react'
import NavigationContext from '../../context/NavigationContext'

const NavBar = () => {
    const {currentNav} = useContext(NavigationContext)


    return (
        <>
        <NavList />
        <NavHeader />
        <NavRoutes />
        </>
    )

}

export default NavBar