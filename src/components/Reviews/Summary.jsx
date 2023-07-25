import './Summary.css'
import Percentage from './Percentage'
import RatingBreakDown from './RatingBreakDown'

const Summary = () => {
    return (
        <div className='summaryContainer'>
            <p className='summmaryContainer_Title'>Customer Ratings and Reviews</p>
            <div className='summary_Percentage_Rating_Container'> 
                <Percentage />
                <RatingBreakDown />
            </div>

        </div>
    )
}

export default Summary