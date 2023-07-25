import {useState, creatContext, createContext} from 'react'

const NavigationContext = createContext()

export const NavigationProvider = ({children}) => {
    const [currentNav, setCurrentNav] = useState('none');

    const changeNav = (id) => {
        setCurrentNav(id);
    }

    return <NavigationContext.Provider value={{
        currentNav,
        changeNav
    }}>
        {children}
    </NavigationContext.Provider>
}

export default NavigationContext