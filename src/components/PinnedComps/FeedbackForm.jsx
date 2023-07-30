import logo from "./img/south_face_removebg.png";

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const FeedbackForm = ({closeFeedbackForm}) => {
    
    const [value, setValue] = React.useState(2);


    const handleSubmit = (e) => {
        e.preventDefault();
        closeFeedbackForm();
        e.target.reset();
    }

    const handleCloseFeedback = () => {
        closeFeedbackForm();
    }
    
    
    return (
        <>
          
        <div className='overlayNew'>
        
            <form className="feedback-form">
                <div>
                    <button type="button" className="close-button" style={{backgroundColor: 'transparent'}} onClick={handleCloseFeedback}>x</button>
                </div>
                
                <div className='feedback-southfacelogo-container'>
                    <img className="feedback-south-face-logo" src={logo} loading='lazy' alt='scroll to top'></img>
                </div>

                <div style={{padding: '20px'}}>
                    <strong style={{color: 'rgb(64, 64, 74)', fontSize: '24px'}}>We'd love your feedback!</strong>
                </div>

                <label className='feedback-form-label' htmlFor="satisfaction">Overall, how satisfied are you with the website?*</label>
                    <div className='feedback-select-container'> 
                        <div className="rating-scale">   
                            <input className="rating-inputs" type='radio' name='rating' id='rating0'/><label className="rating-labels" htmlFor="rating0" style={{cursor: 'pointer'}}>0</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating1'/><label className="rating-labels" htmlFor="rating1" style={{cursor: 'pointer'}}>1</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating2'/><label className="rating-labels" htmlFor="rating2" style={{cursor: 'pointer'}}>2</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating3'/><label className="rating-labels" htmlFor="rating3" style={{cursor: 'pointer'}}>3</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating4'/><label className="rating-labels" htmlFor="rating4" style={{cursor: 'pointer'}}>4</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating5'/><label className="rating-labels" htmlFor="rating5" style={{cursor: 'pointer'}}>5</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating6'/><label className="rating-labels" htmlFor="rating6" style={{cursor: 'pointer'}}>6</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating7'/><label className="rating-labels" htmlFor="rating7" style={{cursor: 'pointer'}}>7</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating8'/><label className="rating-labels" htmlFor="rating8" style={{cursor: 'pointer'}}>8</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating9'/><label className="rating-labels" htmlFor="rating9" style={{cursor: 'pointer'}}>9</label>
                            <input className="rating-inputs" type='radio' name='rating' id='rating10'/><label className="rating-labels" htmlFor="rating10" style={{cursor: 'pointer'}}>10</label>
                        </div>
                    </div>

                <label className="feedback-form-label" htmlFor="purpose">What was the main purpose for your visit today?</label>
                    <div className='feedback-select-container'>
                        <select className="feedback-select" name="purpose" id="purpose" placeholder='Please Select Option'>
                            <option value="">Please Select Option</option>
                            <option value="">Browse / Discover new products</option>
                            <option value="">Purchase a specific product</option>
                            <option value="">Find product information</option>
                            <option value="">Buy a gift</option>
                            <option value="">Update my account</option>
                            <option value="">Check order status</option>
                            <option value="">Join XPLR Pass</option>
                        </select>
                    </div>
                <label className="feedback-form-label" htmlFor="completePurpose">Were you able to complete your primary purpose for today's visit?</label>
                    <div className='feedback-select-container'>
                        <select className="feedback-select" name="completePurpose" id="completePurpose" placeholder='Please Select Option'>
                            <option value="">Please Select Option</option>
                            <option value ="">Yes</option>
                            <option value ="">No</option>
                            <option value="">Not yet done</option>
                        </select>
                    </div>
                <label className="feedback-form-label" htmlFor="improve">We appreciate your feedback. Please tell us the most important thing we could do to improve your experience.</label>
                    <div className='feedback-select-container'>
                        <textarea id="feedback-input-text" className="feedback-select" type="text" rows="3" name="improve" />
                    </div>
                <label className="feedback-form-label" htmlFor="loyalty">Are you a loyalty member?</label>
                    <div className='feedback-select-container'>
                            <input style={{cursor: 'pointer'}} type='radio' name='loyalty' value ='' id='loyalty-yes'/><label htmlFor="loyalty-yes" style={{cursor: 'pointer'}}>Yes</label>
                            <input style={{marginLeft: '30px', cursor: 'pointer'}} type='radio' name='loyalty' value="" id='loyalty-no'/><label htmlFor="loyalty-no" style={{cursor: 'pointer'}}>No</label>
                    </div>
                    
                <p style={{fontSize: '12px', fontWeight: 400, boxSizing: 'border-box', paddingLeft: '20px'}}>Your responses will be used in accordance with our <a href="https://www.thenorthface.com/help/privacy.html">privacy policy</a>.</p>

                <div style={{ paddingTop: 10, display: "flex", backgroundColor: 'white' }}>    
                    <div id="feedbackcameraBtn" className='feedback-camera-button' type="button"><img ng-style="setSCButtonImageStyle()" ng-src="https://resources.digital-cloud-west.medallia.com/resources/form/FormBuilder/assets/images/kampyle/form_sc_button_trans-wcag.png" src="https://resources.digital-cloud-west.medallia.com/resources/form/FormBuilder/assets/images/kampyle/form_sc_button_trans-wcag.png" style={{maxWidth: "50px", maxHeight: "30px", cursor: "pointer"}}></img></div>
                
                    <button id="feedbackcloseBtn" className="feedback-form-buttons" type="button" onClick={handleCloseFeedback}>Close</button>
                    <button id="feedbacksubmitBtn" className="feedback-form-buttons" type="submit" onClick={handleSubmit}>Submit</button>
                </div>

                <p style={{textAlign: 'right', paddingRight: '30px', fontSize: '12px'}}>Powered by <img ng-src="https://resources.digital-cloud-west.medallia.com/resources/form/FormBuilder/assets/images/kampyle/CommandCenterFormLogo.svg" alt="Medallia" className="powered-by-image" src="https://resources.digital-cloud-west.medallia.com/resources/form/FormBuilder/assets/images/kampyle/CommandCenterFormLogo.svg"></img></p>
            </form>
        </div>

        </>
    )
}

export default FeedbackForm
