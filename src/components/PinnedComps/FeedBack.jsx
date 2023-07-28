import './FeedBack.css'

const FeedBack = () => {
    return (
        <>
        <div className='feedback-div'>  
            <p className='feedback-paragraph'>Feedback</p>
        </div>

        <div className='overlayNew'>

            <form className="form">
                <button type="button" className="close-button" >X</button>
                <label htmlFor="satisfaction">Overall, how satisfied are you with the website?*</label>
                    <select name="satisfaction" id="satisfaction">
                        <option value=""></option>
                        <option value ='0'></option>
                    </select>

                <label htmlFor="purpose">What was the main purpose for your visit today?</label>
                    <select name="purpose" id="purpose" placeholder='Please Select Option'>
                        <option value="">Browse / Discover new products</option>
                        <option value="">Purchase a specific product</option>
                        <option value="">Find product information</option>
                        <option value="">Buy a gift</option>
                        <option value="">Update my account</option>
                        <option value="">Check order status</option>
                        <option value="">Join XPLR Pass</option>
                    </select>

                <label htmlFor="completePurpose">Were you able to complete your primary purpose for today's visit?</label>
                    <select name="completePurpose" id="completePurpose" placeholder='Please Select Option'>
                        <option value ="">Yes</option>
                        <option value ="">No</option>
                        <option value="">Not yet done</option>
                    </select>

                <label htmlFor="improve">We appreciate your feedback. Please tell us the most important thing we could do to improve your experience.</label>
                    <input id="improve" type="text" name="improve" />

                <label htmlFor="loyalty">Are you a loyalty member?</label>
                    <select name="loyalty" id="loyalty">
                        <option value =''>Yes</option>
                        <option value="">No</option>
                    </select>

                <p></p>

                <div style={{ paddingTop: 10, display: "flex", justifyContent: "center" }}>
                    <button id="submitBtn" className="submit-button" type="submit">Submit</button>
                    <button id="closeBtn" className="close-button" type="button">Close</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default FeedBack