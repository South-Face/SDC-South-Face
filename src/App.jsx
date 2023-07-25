import React from 'react'

import NavBar from './components/NavBar/NavBar'
// import ProductDetails from './components/ProductDetailComponent/ProductDetails'
import AddPhoto from './components/AddPhoto'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer'
import FeedBack from './components/FeedBack'
import Message from './components/Message'
import ReccProducts from './components/ReccProducts'
import {NavigationProvider} from './context/NavigationContext'



function App() {
  
  return (
      <NavigationProvider>
        <NavBar />
        {/* <ProductDetails /> */}
        <AddPhoto />
        <Reviews />
        <ReccProducts />
        <Footer />
        <Message />
        <FeedBack />
      </NavigationProvider> 
  )
}

export default App
