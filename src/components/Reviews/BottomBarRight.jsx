import './BottomBarRight.css'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"; 
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'





const BottomBarRight = () => {
    const {setReviewsShowing, breakDown} = useContext(ReviewsContext)
    const [previousShowing, setPreviousShowing] = useState(false)
    const [nextShowing, setNextShowing] = useState(true)


    //////////This is scaled to only work with up to 19 reviews /////////
    const handleNextClick = () => {
     if(breakDown.totalReviews > 10) {
        setReviewsShowing(10, Math.min(breakDown.totalReviews, 19))
        setPreviousShowing(true)
        checkNext(19, breakDown.totalReviews)
     } else {
        return
     }
    }
    const handlePreviousClick = () => {
        setPreviousShowing(false)
        setReviewsShowing(0, 9)
        checkNext(9, breakDown.totalReviews)
    }

    function checkNext(currentNum, length) {
        if(currentNum > length) {
            setNextShowing(false)
        } else {
            setNextShowing(true)
        }
    }
 
    return (
        <div className='bottomBarRight'>
        <div className='bottomBarRight_Next'> 
        {previousShowing ? 
             <button className='nextButton' onClick ={handlePreviousClick}>
                <BsArrowLeft /> Previous 
            </button> : <></>}
            {nextShowing ? 
            <button className='nextButton' onClick ={handleNextClick}>
                Next <BsArrowRight />
            </button>  : <></>}

        </div>
    </div>
    )
}

export default BottomBarRight

