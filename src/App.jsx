
import './App.css'
import Footer from './components/Footer/Footer'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ProductPage from './components/ProductDetailComponent/ProductPage'
import AddPhoto from './components/AddPhoto'
import Reviews from './components/Reviews/Reviews'
import FeedBack from './components/PinnedComps/FeedBack'
import Message from './components/PinnedComps/Message'
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
        <FeedBack />
        <Message />
      </> 
  )
}

export default App
