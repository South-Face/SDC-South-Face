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

    if (currentNav === 'none') {
    return (
        <>
        <NavList />
        <NavHeader />
        <NavRoutes />
        </>
    )
    }
    
    if (currentNav === 'sale') {
        return (
            <>
            <NavList />
            <NavHeader />
            <NavRoutes />
            <SaleComponent />
            </>
        )
        }

    if (currentNav === 'mens') {
        return (
            <>
            <NavList />
            <NavHeader />
            <NavRoutes />
            <MensComponent />
             </>
        )
        }

    if (currentNav === 'womens') {
        return (
            <>
            <NavList />
            <NavHeader />
            <NavRoutes />
            <WomensComponent />
            </>
        )
        }

    if (currentNav === 'kids') {
        return (
            <>
            <NavList />
            <NavHeader />
            <NavRoutes />
            <KidsComponent/>
            </>
        )
        }

    if (currentNav === 'footwear') {
        return (
            <>
            <NavList />
            <NavHeader />
            <NavRoutes />
            <FootwearComponent />
            </>
        )
        }

    if (currentNav === 'bags/gear') {
        return (
            <>
            <NavList />
            <NavHeader />
            <NavRoutes />
            <BagsGearComponent />
            </>
        )
        }

    if (currentNav === 'aboutUs') {
        return (
            <>
            <NavList />
            <NavHeader />
            <NavRoutes />
            <AboutUsComponent />
            </>
        )
        }
}

export default NavBar