import './ReviewCont.css'
import SingleReview from './singleReview'
import { useContext} from 'react'
import ReviewsContext from '../../context/ReviewsContext'



const ReviewCont = () => {
    const {currentReviews, reviewNumbersShowingFirstReview, reviewNumbersShowingLastReview} = useContext(ReviewsContext)
    const reviewsShowing = currentReviews.slice(reviewNumbersShowingFirstReview, reviewNumbersShowingLastReview)

    return reviewsShowing.map( (single, index) => (
        <SingleReview key={index} review = {single}/> 
        )
)
}

export default ReviewCont