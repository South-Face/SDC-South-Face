import './ReviewTopBar.css'

const ReviewTopBar = () => {
    return (
        <div className='reviews_Top_Bar'>
            <div className='review_Top_Bar_Title'> 
            Reviewed by 14 customers
            </div>
            <div className='select_Review_Organization'>
            <select className='organize_Reviews_Button'>
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