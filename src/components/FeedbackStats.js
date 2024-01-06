import React from "react";
import { useContext } from "react";
import feedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const {feedback} = useContext(feedbackContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h5>{feedback.length} Reviews</h5>
      <h5>Average Ratings : {isNaN(average) ? 0 : average}</h5>
    </div>
  );
}

export default FeedbackStats;
