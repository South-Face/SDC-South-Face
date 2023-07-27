import './RatingBreakDown.css'
import './Summary.css'
import { useContext, useState} from 'react'
import ReviewsContext from '../../context/ReviewsContext'
import RatingBreakDown_Popover from './RatingBreakDown_Popover'



const RatingBreakDown = () => {
    const { breakDown } = useContext(ReviewsContext);
    const [isShown, setShown] = useState({
        column1: false,
        column2: false,
        column3: false,
        column4: false,
        column5: false,
      });

    const handleMouse = (columnId) => {
        setShown((prevState) => ({
            ...prevState,
            [columnId]: !prevState[columnId]
          }))
    }

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
                    <div className='column' key={column.id} onMouseEnter={() => handleMouse(column.id)}  onMouseLeave={ () => handleMouse(column.id)}>
                        {isShown[column.id] ? <RatingBreakDown_Popover label = {column.label}/> : <></>}
                        <div className="side">
                            <div>{column.label}</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className={`bar-${index}`} style={{ width: `${column.percentage}%` }} ></div>
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





