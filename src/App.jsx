
import './App.css'
import Footer from './components/Footer/Footer'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ProductPage from './components/ProductDetailComponent/ProductPage'
import AddPhoto from './components/AddPhoto'
import Reviews from './components/Reviews/Reviews'
import FeedBack from './components/FeedBack'
import Message from './components/Message'
import ReccProducts from './components/recommended/ReccProducts'
import Exploring from './components/Exploring/Exploring'
import {NavigationProvider} from './context/NavigationContext'
import {ReviewsProvider} from './context/ReviewsContext'

function App() {
  
  return (
      <NavigationProvider>
        <NavBar />
        <ProductPage />
        <Exploring />  
{/*         <AddPhoto /> */}

        <ReviewsProvider>
            <Reviews />
        </ReviewsProvider>

        <ReccProducts />
        <Footer />
        <Message />
        <FeedBack />
 
      </NavigationProvider> 
  )
}

export default App
