import './ReviewCont.css'
import SingleReview from './singleReview'
import { useContext} from 'react'
import ReviewsContext from '../../context/ReviewsContext'



const ReviewCont = () => {
    const {currentReviews, reviewNumbersShowingFirstReview, reviewNumbersShowingLastReview} = useContext(ReviewsContext)

    const reviewsShowing = currentReviews.slice(reviewNumbersShowingFirstReview, reviewNumbersShowingLastReview)
    //This is what decides what revies are showing based of the number of reviews are on
        //i.e. we are on reviews 1-10 so the first is at index 0, 10
        //These numbers get altered in another component, but it is so you can use the next component 

    return reviewsShowing.map( (single, index) => (
        <SingleReview key={index} review = {single}/> 
        )
)
}

export default ReviewCont