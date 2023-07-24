import './ReviewCont.css'
import SingleReview from './singleReview'


let aReview = {
    id: 1,
    rating: 2,
    title: "this is a title",
    comment: "It's so hard to find a white/cream colored backpack. This is so beautiful and has a sheen in the fabric. Very sturdy and rose gold accents throughout. So elegant yet sporty for school and lugging around girly stuff. Perfectly matches all my Lululemon fit in bone color. This was a hard find but a perfect match. Love!!!",
    userName: "Garett"
}

const reviews = [aReview]

const ReviewCont = () => {
    return reviews.map( (single) => (
        <SingleReview key={single.id} review = {single}/> 
        )
)
}

export default ReviewCont