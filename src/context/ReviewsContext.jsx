import {useState, createContext, useEffect} from 'react'

const ReviewsContext = createContext()

const routeURL = 'https://southface.onrender.com'
//'https://southface.onrender.com'
//http://localhost:8000

export const ReviewsProvider = ({children}) => {
    const [breakDown, setBreakDown] = useState({}) 
    const [currentReviews, setcurrentReviews] = useState([]);
/* ------------------ Grab Data ------------------- */


    useEffect(() =>{
        const getData = async () => {
        try{
                const result = await fetch(`${routeURL}/reviews`)
                const data = await result.json()
                setcurrentReviews([...data])
              }
         catch (err){
            console.log(err.message)
            }
        }
        getData()
      }, [])


/* ------------------ Breakdown Data ------------------- */


    useEffect(() =>{
          const newBreakdown = {}
          percentage(newBreakdown, currentReviews)
          starBreakDown(newBreakdown, currentReviews)
          setBreakDown(newBreakdown)
  
      }, [currentReviews])


/* ------------------ Set Context Return ------------------- */
    return <ReviewsContext.Provider value={{
        currentReviews,
        setcurrentReviews,
        breakDown
    }}>
        {children}
    </ReviewsContext.Provider>
}

export default ReviewsContext




function percentage (obj, data) {
    obj.totalReviews = data.length

    obj.reviewRatingTotal = 0

    data.forEach((review) => {
        obj.reviewRatingTotal += parseInt(review.rating)
    }, 0);

    obj.percentage = Math.ceil(obj.reviewRatingTotal * 2 / obj.totalReviews * 10) || 0
}

function starBreakDown (obj, data) {
    obj.oneStar = 0
    obj.twoStar = 0
    obj.threeStar = 0
    obj.fourStar = 0
    obj.fiveStar = 0

    data.forEach(review => {
        switch (parseInt(review.rating)) {
            case 1:
                obj.oneStar++;
                break;
            case 2:
                obj.twoStar++;
                break;
            case 3:
                obj.threeStar++;
                break;
            case 4:
                obj.fourStar++;
                break;
            case 5:
                obj.fiveStar++;
                break;
            default:
                break;
        }
    });
    obj.oneStarPercentage = Math.ceil(obj.oneStar / obj.totalReviews * 100) || 0
    obj.twoStarPercentage = Math.ceil(obj.twoStar / obj.totalReviews * 100) || 0
    obj.threeStarPercentage = Math.ceil(obj.threeStar / obj.totalReviews * 100) || 0
    obj.fourStarPercentage = Math.ceil(obj.fourStar / obj.totalReviews * 100) || 0
    obj.fiveStarPercentage = Math.ceil(obj.fiveStar / obj.totalReviews * 100) || 0
}
