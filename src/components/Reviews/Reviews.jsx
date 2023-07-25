import './Reviews.css'

import ActualReviews from './actualReviews'
import Summary from './Summary'

const Reviews = () => {
    return (
        <div className='main_Reviews'>
            <Summary />
            <ActualReviews />
        </div>
    )
}

export default Reviews