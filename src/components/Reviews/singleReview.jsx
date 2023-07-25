import './SingleReview.css'

let aReview = {
    id: 1,
    rating: 2,
    title: "this is a title",
    comment: "It's so hard to find a white/cream colored backpack. This is so beautiful and has a sheen in the fabric. Very sturdy and rose gold accents throughout. So elegant yet sporty for school and lugging around girly stuff. Perfectly matches all my Lululemon fit in bone color. This was a hard find but a perfect match. Love!!!",
    userName: "this is the username"
}
/*     reviewId serial PRIMARY KEY,
    rating NUMERIC,
    ratingTitle varchar,
    comment text,
    userName varchar
    */

const SingleReview = ({review}) => {
    return (
        <div className='singleReview'>
            <div className='singleReview_Review'> 
                <p> stars go here </p>
                <p className='reviewTitle'>{review.title}</p>
                <p className='reviewComment'>{review.comment} </p>
                <select className='moreDetailsButton'> 
                    <option>More Details</option>
                </select>
                <div className='reviewHelpful'>
                    <p> Was this review helpful to you? </p>
                    <p> up</p>
                    <p> down</p>
                    <p> Flag this review</p>
                </div>
            </div>
            <div className='singleReview_SubmitedBy'> 
                <div className='singleReview_SubmitedBy_Info'> 
                    <p> Submitted <b>13 days ago</b> By <b>{review.userName}</b> from <b>Undisclosed</b></p>
                    <p> Submitted as part of a sweepstakes entry</p>
                </div>
            </div>
        </div>

    )
}

export default SingleReview