import './BottomBarLeft.css'
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'

const BottomBarLeft = () => {

    //If visible is true, meaning you are within the view area of the Scroll Back to Top
    //Then the scroll button will show

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 2350, 
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', toggleVisible);



    const {currentReviews} = useContext(ReviewsContext)

    /*Was getting issues with the display starting undefined so i had to create state to make it render once 
        the other stuff loaded. */

    const [display1, setDisplay1] = useState(0);
    const [display2, setDisplay2] = useState(0);

    useEffect(() => {
        if (currentReviews && currentReviews.length > 0) {
            setDisplay1(currentReviews[0]?.reviewid || 0);
            setDisplay2(currentReviews[9]?.reviewid || 0);
        }
    }, [currentReviews]);
    
return (

    <div className='bottomBarLeft'>
        <div className='bottomBarLeft_Displaying'>
            Displaying Reviews {display1} - {display2}
        </div>
        <div className='bottomBarLeft_ScrollTop'>
            <button className='scrollToTopButton' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
                Back to Top
            </button> 
        </div>
    </div>


)
}

export default BottomBarLeft