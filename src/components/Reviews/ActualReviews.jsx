import './actualReviews.css'
import ReviewTopBar from './ReviewsTopBar'
import ReviewCont from './ReviewCont'
import ReviewBottomBar from './ReviewBottomBar'

const ActualReviews = () => {
return (
    <div className='reviews_Container'>
        <ReviewTopBar />
        <ReviewCont />
        <ReviewBottomBar />
        
    </div>
)
}

export default ActualReviews