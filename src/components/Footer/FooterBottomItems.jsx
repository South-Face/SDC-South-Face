import './Footer.css'
import logo from "./img/south_face_removebg.png";
import tiktok from "./img/tiktok-icon2.png";
import pinterest from "./img/pinterest.png";
import { HiChevronRight } from "react-icons/hi"; 

const FooterBottomItems = () => {
    return (
        <div className='footerBottom'>
            {/* <div className='footerContainer'> */}
                <div className='footerBottom-3Columns'>
                    <div className='FB-storelocator'>
                        <h2>
                            <span className="BfooterColumnTitle">Store Locator</span>
                        </h2>
                        <p id='storelocpara' className="footerColumnParagraph">Explore a retail store or outlet near you.</p>
                        <button className="storelocator-button"><a className="storelocator-link" href="/en-us/more/store-locator">|</a>Find a Store</button>
                    </div>
                    <div className='FB-socialmedia'>
                        <h2>
                            <span className="BfooterColumnTitle">Follow The South Face</span>
                        </h2>
                        <div style={{marginTop: '8px'}} className='icons-container'>
                            <div className='icons'>
                                <a href="https://www.youtube.com/c/TheNorthFace" target="_blank" aria-label="Follow us on YouTube"><svg xmlns="http://www.w3.org/2000/svg" width={'34px'} height={"34px"} viewBox="0 0 448 512" fill="#64686b"><path className="icon" d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"/></svg></a>
                            </div>
                            <div style={{paddingRight: '2px'}}>
                                <a href="https://www.instagram.com/thenorthface/" target="_blank" aria-label="Follow Us on Instagram"><svg xmlns="http://www.w3.org/2000/svg" height={"34px"} width={"34px"} viewBox="0 0 448 512" fill="#64686b"><path className="icon" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg></a>
                            </div>
                            <div style={{paddingTop: '2px', paddingRight: '2px'}}>
                                <a href='https://www.tiktok.com/@thenorthface'><img style={{height: '30px', width: '30px'}} src={tiktok}></img></a>
                            </div>
                            <div style={{paddingRight: '2px'}}>
                                <a href="https://twitter.com/TheNorthFace" target="_blank" aria-label="Follow Us on Tiktok"><svg xmlns="http://www.w3.org/2000/svg" height={"34px"} width={"34px"} viewBox="0 0 448 512" fill="#64686b"><path className="icon" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg></a>
                            </div>
                            <div style={{paddingTop: '2px'}}>
                                <a href='https://www.pinterest.co.uk/thenorthface/_shop/'><img style={{height: '30px', width: '30px'}} src={pinterest}></img></a>
                            </div>
                        </div>
                    </div>
                    <div className='FB-emaillist'>
                        <h2>
                            <span className="BfooterColumnTitle">Enter Your Email</span>
                        </h2>
                        <div id='Email-signup-description' className='footerColumnParagraph'>
                            <p>Adventure is everywhere.</p>
                            <p>Even in your inbox.</p>
                        </div>
                    
                        <div>
                            <form className='subscriptionForm'>
                                <div className="subscriptionForm-inputWrapper">
                                    <div className="input subscriptionForm-input">
                                        <div className="input__wrapper">
                                            <label htmlFor="subscription-emailAddress" className="input-label">Email Address</label>
                                            <input id="subscription-emailAddress" placeholder="" aria-label="Email Address" name="subscription-emailAddress" type="text" className="email-subInput"></input> 
                                        </div>
                                    </div>    
                                        <button aria-label="Send" type="button" className="email-button"><HiChevronRight style={{height: "24px", width: "24px", color: '#fdfdfd'}}/></button>
                                </div>
                                <div className="subscriptionForm-checkboxWrapper">
                                    <div className="subscriptionForm-checkbox">
                                        <label id="checkbox" htmlFor="privacyAgree-1388" className="checkbox-container">
                                            <input type="checkbox" name="privacyAgree" className="checkbox-input" value=""></input>
                                            <span className="checkbox-label">I agree to the <a className="privacy-terms" href="https://www.thenorthface.com/en-us/help/terms.html" target="_blank">Privacy Policy &amp; Terms of Use</a></span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>    
                    </div>
                </div>

{/* Small bottom section with logo, copyright, and other policies */}

                <div className='footerBottom-Bar'>
                    <div className='FBB-info'>
                        <div className='FBBI-logo'>
                            <img className="south-face-logo" src={logo} loading='lazy' alt='scroll to top'></img>
                        </div>
                        <div className='FBBI-wrap'>
                            <div  className='copyrightstatement'><span>Ⓒ The South Face, A VF Company</span></div>
                            <div className='FBBI-wrapLinks'>
                                <a className='FBBI-wrapLink' rel="noopener" target="_blank" href='https://d1io3yog0oux5.cloudfront.net/_0cbb16da63df2bc454ca964a56de2de0/vfc/files/pages/modern-slavery-statement/Modern_Slavery_and_Human_Rights_Disclosure.pdf'>CA Supply Chains Act</a>
                                <a className='FBBI-wrapLink' rel="noopener" target="_blank" href="https://www.vfc.com/modern-slavery-statement">UK Slavery Act</a>
                                <span><a className='FBBI-wrapLink' rel="noopener" target="_blank" href='https://www.thenorthface.com/en-us/help/privacy'>Privacy Policy</a></span>
                                <span>
                                    <img style={{height: '12px', width: '25px'}} src='https://www.cylab.cmu.edu/_files/images/news/2023/0410-hd-privacy-choices-icon.png'></img>
                                    <a className='FBBI-wrapLink' href="https://www.vfc.com/privacy-requests"> Your Privacy Choices</a>
                                </span>
                                <span><a className='FBBI-wrapLink' rel="noopener" target="_blank" href='https://www.thenorthface.com/en-us/help/terms'>Terms of Use</a></span>
                                <span>
                                    <img style={{height: '12px', width: '34px'}} src='https://client.levelaccess.com/hc/article_attachments/12763485297943'></img>
                                    <a className='FBBI-wrapLink' rel="noopener" target="_blank" href="https://www.thenorthface.com/en_us/policies/the-north-face-accessibility-statement.html"> Accessibility Statement</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>    
            {/* </div> */}
        </div>
    )
}

export default FooterBottomItems
