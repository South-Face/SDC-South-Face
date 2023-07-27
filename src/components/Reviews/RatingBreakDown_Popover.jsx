
import { Popover, Whisper } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './RatingBreakDown_Popover.css'


const RatingBreakDown_Popover = ({label}) => {
    return (
        <div className='popper' >
            <Popover  className ="test" title="" visible>
                <p>{label}</p>
            </Popover>
        </div>
    )
}
 export default RatingBreakDown_Popover