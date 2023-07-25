import './RatingBreakDown.css'
import'./Summary.css'
import { useState } from 'react'

const RatingBreakDown = () => {


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
                    <div className="bar-5"></div>
                    </div>
                </div>
                <div className="side-right">
                    150
                </div>
            </div>
            <div className='column' id='column2'> 
                <div className="side">
                    <div>4 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-4"></div>
                    </div>
                </div>
                <div className="side-right">
                    63
                </div>
            </div>
            <div className='column' id='column3'> 
            <div className="side">
                    <div>3 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-3"></div>
                    </div>
                </div>
                <div className="side-right">
                    15
                </div>
            </div>
            <div className='column' id='column4'> 
                <div className="side">
                    <div>2 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-2"></div>
                    </div>
                </div>
                <div className="side-right">
                    6
                </div>
            </div>
            <div className='column' id='column5'> 
                <div className="side">
                    <div>1 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-1"></div>
                    </div>
                </div>
                <div className="side-right">
                    20
                </div>
            </div>
           
            </div>
        </div>
    )
}

export default RatingBreakDown
