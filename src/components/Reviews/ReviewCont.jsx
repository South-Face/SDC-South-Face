import './ReviewCont.css'
import SingleReview from './singleReview'
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'



const ReviewCont = () => {
    const {currentReviews} = useContext(ReviewsContext)

    const firstTenReviews = currentReviews.slice(0, 10)

    return firstTenReviews.map( (single, index) => (
        <SingleReview key={index} review = {single}/> 
        )
)
}

export default ReviewCont