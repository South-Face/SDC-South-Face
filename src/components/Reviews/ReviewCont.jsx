import './ReviewCont.css'
import SingleReview from './singleReview'
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'



const ReviewCont = () => {
    const {currentReviews} = useContext(ReviewsContext)
    console.log(currentReviews)

    const firstTenReviews = currentReviews.slice(0, 10)

    return firstTenReviews.map( (single) => (
        <SingleReview key={single.reviewId} review = {single}/> 
        )
)
}

export default ReviewCont