import './ReviewBottomBar.css'
import BottomBarLeft from './BottomBarLeft'
import BottomBarRight from './BottomBarRight'

const ReviewBottomBar = () => {
    return (
        <div className='bottomBarContainer'>
            <BottomBarLeft />
            <BottomBarRight />
        </div>
    )
}

export default ReviewBottomBar