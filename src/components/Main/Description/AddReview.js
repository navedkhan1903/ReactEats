import "./AddReview.css";
import Emotion from "./Emotion";
import { useState } from "react";

export default function AddReview({ name, closeReview }) {
  const [review, setReview] = useState();
  const [submit, setSubmit] = useState(0);
  const [emotion, setEmotion] = useState([0, 0, 0, 0, 0]);

  var rating = emotion.indexOf(1) + 1;

  async function postReview() {
    setSubmit(1);
    // const reviewData = {
    //   username: localStorage.getItem("username"), rating: rating, review: review
    // };
    // const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
    // await fetch(fetchUrl + 'reviews/' + name + '/.json', { method: 'POST', body: JSON.stringify(reviewData) })
    await fetch("https://react-eats-backend-naved.vercel.app/Main", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: localStorage.getItem("username"), stars: rating, review: review, item: name }),
    });
    setSubmit(0);
    closeReview();
  }

  return (
    <div className="review_container">
      <div className="add_review_title primary">Give feedback</div>
      <div className="add_review_subtitle">What do you think of our {name}?</div>
      <Emotion onGetEmotion={setEmotion} />
      <div className="add_review_subtitle">Do you have any thoughts you'd like to share?</div>
      <textarea
        className="review_input"
        onChange={(event) => {
          setReview(event.target.value);
        }}
      />
      <div className="review_cancel_btn" onClick={closeReview}>
        <center>
          <div className="review_cancel_btn_text primary">Cancel</div>
        </center>
      </div>
      {!submit && (
        <div className="review_submit_btn" onClick={postReview}>
          <center>
            <div className="review_submit_btn_text">Submit</div>
          </center>
        </div>
      )}
      {submit === 1 && (
        <div className="review_submit_btn">
          <center>
            <div className="review_submit_btn_text">Submitting...</div>
          </center>
        </div>
      )}
    </div>
  );
}
