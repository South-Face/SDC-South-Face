import { useState } from 'react'
import './FeedBack.css';
import FeedbackForm from './FeedbackForm';


const FeedBack = () => {
    
    const [formOpen, setFormOpen] = useState(false);

    const handleFeedbackFormOpen = () => setFormOpen(true);
    const closeFeedbackForm = () => setFormOpen(false);
    
    return (
        <>
            <div className='feedback-box' onClick={handleFeedbackFormOpen}>  
                <p className='feedback-box-paragraph'>Feedback</p>
            </div>

            {formOpen && (
            <FeedbackForm 
            closeFeedbackForm={closeFeedbackForm}
            />
            )}

        </>
    )
}

export default FeedBack