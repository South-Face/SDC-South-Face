import './RatingBreakDown.css'
import './Summary.css'
import { useContext } from 'react'
import ReviewsContext from '../../context/ReviewsContext'

const RatingBreakDown = () => {
    const { breakDown } = useContext(ReviewsContext);

    const ratingColumns = [
        { id: 'column1', label: '5 star', percentage: breakDown.fiveStarPercentage, count: breakDown.fiveStar },
        { id: 'column2', label: '4 star', percentage: breakDown.fourStarPercentage, count: breakDown.fourStar },
        { id: 'column3', label: '3 star', percentage: breakDown.threeStarPercentage, count: breakDown.threeStar },
        { id: 'column4', label: '2 star', percentage: breakDown.twoStarPercentage, count: breakDown.twoStar },
        { id: 'column5', label: '1 star', percentage: breakDown.oneStarPercentage, count: breakDown.oneStar },
    ];

    return (
        <div className='summary_RatingBreakDown'>
            <div className="breakdown_title">Ratings Breakdown</div>
            <div className="table">
                {ratingColumns.map((column, index) => (
                    <div className='column' key={column.id}>
                        <div className="side">
                            <div>{column.label}</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className={`bar-${index}`} style={{ width: `${column.percentage}%` }}></div>
                            </div>
                        </div>
                        <div className="side-right">
                            {column.count}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RatingBreakDown;





