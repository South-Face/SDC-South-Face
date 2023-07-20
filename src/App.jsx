import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ProductDetails from './components/ProductDetails'
import Reviews from './components/Reviews'
import ReccProducts from './components/ReccProducts'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <NavBar />
      <ProductDetails />
      <Reviews />
      <ReccProducts />
      ,<Footer />
    </>
  )
}

export default App
