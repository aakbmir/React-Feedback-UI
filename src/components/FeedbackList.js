import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import feedbackContext from "../context/FeedbackContext";

function FeedbackList() {

  const {feedback} = useContext(feedbackContext);

  if (!feedback || feedback.length === 0) {
    return <div>No Feedback Yet !!</div>;
  }
  return (
    <div className="feedback-item">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
