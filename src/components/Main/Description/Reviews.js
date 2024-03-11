import "./Reviews.css";
import { useState, useEffect } from "react";
import AddReview from "./AddReview";
import ReviewItem from "./ReviewItem";
import { RiAddLine } from "react-icons/ri";

export default function Reviews({ name }) {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState("0");
  const [reviewForm, setReviewForm] = useState(0);

  useEffect(() => {
    async function getReviews() {
      setLoading("1");
      // const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
      // const response = await fetch(fetchUrl + 'reviews/' + name + '/.json');
      const response = await fetch("https://react-eats-backend-4zq8asb3b-naved-khans-projects.vercel.app/Main/" + name);
      const data = await response.json();
      const reviewsArr = [];
      for (const key in data) {
        reviewsArr.push({ username: data[key].username, rating: data[key].stars, review: data[key].review });
      }
      reviewsArr.reverse();
      setReviews(...[reviewsArr]);
      setLoading("0");
    }
    getReviews();
  }, [reviewForm]);

  return (
    <>
      {!reviewForm && (
        <>
          <div className="review_title primary">Reviews</div>
          <div className="add_review" onClick={() => setReviewForm(1)}>
            <RiAddLine />
          </div>
          <br />
          {loading === "1" && (
            <div>
              <img src="./images/loader.gif" height="50px" />
              Loading...
            </div>
          )}
          {reviews && reviews.map((x) => <ReviewItem {...x} key={Math.random()} />)}
        </>
      )}
      {reviewForm === 1 && (
        <AddReview
          name={name}
          closeReview={() => {
            setReviewForm(0);
            setReviews([]);
          }}
        />
      )}
    </>
  );
}
