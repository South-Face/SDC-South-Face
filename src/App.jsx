import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import ProductPage from './components/ProductDetailComponent/ProductPage'
import AddPhoto from './components/AddPhoto'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer'
import FeedBack from './components/FeedBack'
import Message from './components/Message'
import ReccProducts from './components/ReccProducts'





function App() {
  
  return (
      <>
        <NavBar />
        <ProductPage />
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
