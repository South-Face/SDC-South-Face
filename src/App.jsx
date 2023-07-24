import React from 'react'

import NavBar from './components/NavBar/NavBar'
import ProductDetails from './components/ProductDetails'
import AddPhoto from './components/AddPhoto'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import FeedBack from './components/FeedBack'
import Message from './components/Message'
import ReccProducts from './components/ReccProducts'



function App() {
  
  return (
      <>
        <NavBar />
        <ProductDetails />
        <AddPhoto />
        <Reviews />
        <ReccProducts />
        <Footer />
        <Message />
        <FeedBack />
      </> 
  )
}

export default App
