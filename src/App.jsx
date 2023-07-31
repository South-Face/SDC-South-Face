
import './App.css'
import Footer from './components/Footer/Footer'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import NavRoutes from './components/NavBar/NavRoutes'
import ProductPage from './components/ProductDetailComponent/ProductPage'
import AddPhoto from './components/AddPhoto'
import Reviews from './components/Reviews/Reviews'
// import FeedBack from './components/PinnedComps/FeedBack'
// import Message from './components/PinnedComps/Message'
import Exploring from './components/exploring/Exploring'
import RecommendedProducts from './components/recommended/RecommendedProducts'
import {NavigationProvider} from './context/NavigationContext'
import {ReviewsProvider} from './context/ReviewsContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <Router> 
      <NavigationProvider>
    <div className='body'>
        <NavBar />
        <NavRoutes />
        <Routes> 
          <Route exact path="" element ={
            <>
                <ProductPage />
                <Exploring />  
                {/* <AddPhoto /> */}
                <ReviewsProvider>
                  <Reviews />
                </ReviewsProvider>            
                <RecommendedProducts />
            </>
          }>
          </Route>
        </Routes>
        <Footer />
        {/* <FeedBack />
        <Message /> */}
            </div>
      </NavigationProvider>      
    </Router>
  )
}

export default App
