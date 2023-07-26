import './RatingBreakDown.css'
import'./Summary.css'
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'

const RatingBreakDown = () => {
    const {breakDown} = useContext(ReviewsContext)

    return (
        <div className='summary_RatingBreakDown'>
           <div className="breakdown_title"> Ratings Breakdown </div>
           <div className="table">
            <div className='column' id='column1'> 
                <div className="side">
                    <div>5 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-5" style={{width: `${breakDown.fiveStarPercentage}%`}}></div>
                    </div>
                </div>
                <div className="side-right">
                {`${breakDown.fiveStar}`}
                </div>
            </div>
            <div className='column' id='column2'> 
                <div className="side">
                    <div>4 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-4" style={{width: `${breakDown.fourStarPercentage}%`}}></div>
                    </div>
                </div>
                <div className="side-right">
                {`${breakDown.fourStar}`}
                </div>
            </div>
            <div className='column' id='column3'> 
            <div className="side">
                    <div>3 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-3" style={{width: `${breakDown.threeStarPercentage}%`}}></div>
                    </div>
                </div>
                <div className="side-right">
                {`${breakDown.threeStar}`}
                </div>
            </div>
            <div className='column' id='column4'> 
                <div className="side">
                    <div>2 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-2" style={{width: `${breakDown.twoStarPercentage}%`}}></div>
                    </div>
                </div>
                <div className="side-right">
                {`${breakDown.twoStar}`}
                </div>
            </div>
            <div className='column' id='column5'> 
                <div className="side">
                    <div>1 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-1" style={{width: `${breakDown.oneStarPercentage}%`}}></div>
                    </div>
                </div>
                <div className="side-right">
                {`${breakDown.oneStar}`}
                </div>
            </div>
           
            </div>
        </div>
    )
}

export default RatingBreakDown
