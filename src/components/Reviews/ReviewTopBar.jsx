import './ReviewTopBar.css'
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'

const ReviewTopBar = () => {

    const [order, setOrder] = useState('asc')
    const {routeOrder} = useContext(ReviewsContext)


  useEffect(() => {
        if(order === 'Most Recent') {
            routeOrder('desc', 'reviewid')
        } else if (order === 'Most Helpful'){
            routeOrder('desc', 'reviewid')
            //not implementing right now due to helpfuls not being in the data base
        } else if(order === 'Lowest Rated'){
            routeOrder('asc', 'rating')
        } else if(order == 'Highest Rated'){
            routeOrder('desc', 'rating')
        } else if(order === 'Oldest') {
            routeOrder('asc', 'reviewid')
        } else {
            routeOrder('desc', 'reviewid')
        }
  }, [order]);

  const handleChange = (e) => {
    setOrder(e.target.value)
  }
    
    return (
        <div className='reviews_Top_Bar'>
            <div className='review_Top_Bar_Title'> 
            Reviewed by 14 customers
            </div>
            <div className='select_Review_Organization'>
            <select className='organize_Reviews_Button' value= {order} onChange={handleChange}>
                    <option>Most Recent</option>   
                    <option>Most Helpful</option>
                    <option>Lowest Rated</option>
                    <option>Highest Rated</option>
                    <option>Oldest</option>
                    <option>Images</option> 
                </select>
            </div>
        </div>
    )
}

export default ReviewTopBar