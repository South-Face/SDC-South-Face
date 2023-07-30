import './ReviewTopBar.css'
import { useContext, useState, useEffect } from 'react'
import ReviewsContext from '../../context/ReviewsContext'

const ReviewTopBar = () => {

    const [order, setOrder] = useState('asc')
    const {routeOrder} = useContext(ReviewsContext)

// So this is for changing the order of the sql search in SQL database route in the context API
    //This takes what the select options are and translates the correct SQL language and the SQL column name
  useEffect(() => {
        if(order === 'Most Recent') {
            routeOrder('desc', 'reviewid')
        } else if (order === 'Most Helpful'){
            routeOrder('desc', 'reviewid')
            //not implementing right now due to helpfuls not being in the data base (nor images one)
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