import React from "react"
import './Testimonials.css'


const Review = () => {
  return (
    <div className="user_reviews">
      <form>
        <input type="image" name="client_avatar" className="client_avatar" />
        <input type="text" name="name" className="name" />
        <textarea name="review" placeholder="review" rows="5" className="review"></textarea>
      </form>
    </div>
  );
}
export default Review
