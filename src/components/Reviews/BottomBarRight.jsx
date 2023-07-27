import './BottomBarRight.css'
import { BsArrowRight } from "react-icons/bs"; 




const BottomBarRight = () => {

    return (
        <div className='bottomBarRight'>
        <div className='bottomBarRight_Next'> 
            <button className='nextButton' >
                Next <BsArrowRight />
            </button> 
        </div>
    </div>
    )
}

export default BottomBarRight

