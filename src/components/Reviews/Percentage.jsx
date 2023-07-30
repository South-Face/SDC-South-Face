import './Percentage.css'
import'./Summary.css'
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'



const Percentage = () => {
    const {breakDown} = useContext(ReviewsContext)
    const [starColor, setStarColors] = useState([["gray", "gray", "gray", "gray", "gray"]])
    
    /* This function is what is setting the colors in an array then in the array it for each star it calls 
        the color at the coresponding index i.e. starColor[0] = gray for default, so the fill color is gray */

    useEffect(() =>{
        const newStarColor = updateStarColors(breakDown.percentage)

        setStarColors(newStarColor)
        
    }, [breakDown])


    return (
    <>
        <div className='summary_Percentage' >
            <div className='percentage_text_container'> 
                <div className='percentage_percenatage_large'> 
                {`${breakDown.percentage} %`}
                </div>
                <div className='percentage_text_text'>
                {`${breakDown.percentage}%`} of reviews would reccommend this product
                </div>
            </div>
            <div className='summary_stars'>
                <div className='starsContainer'>
                    <div className='star' id="star1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={starColor[0]} className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='star' id="star2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={starColor[1]} className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='star' id="star3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={starColor[2]} className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='star' id="star4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={starColor[3]} className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='star' id="star5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={starColor[4]} className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className='summary_stars_number_reviews'>
                {`${breakDown.totalReviews}`} Reviews
                </div>

            </div>
            <div className="review_button_container">
                    <button className="review_button">Write a Review</button>
                </div>
            </div>


    </>

    )
}

export default Percentage


//This is a function to chech the percentage of the rating 
    //Could have used a switch case

function updateStarColors(rating) {
    if (rating === 100) {
        return ["black", "black", "black", "black", "black"];
    } else if (rating >= 80) {
        return ["black", "black", "black", "black", "gray"];
    } else if (rating >= 60) {
        return ["black", "black", "black", "gray", "gray"];
    } else if (rating >= 40) {
        return ["black", "black", "gray", "gray", "gray"];
    } else if (rating >= 20) {
        return ["black", "gray", "gray", "gray", "gray"];
    } else {
        return ["gray", "gray", "gray", "gray", "gray"];
    }
}
