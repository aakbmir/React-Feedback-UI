import { v4 as UUIDv4 } from "uuid";
import { createContext, useState } from "react";
import FeedbackData from "../components/Data/FeedbackData";

const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedbackData] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      setFeedbackData(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedbackData(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = UUIDv4();
    setFeedbackData([newFeedback, ...feedback]);
  };

  return (
    <feedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback,
        feedbackEdit: feedbackEdit,
      }}
    >
      {children}
    </feedbackContext.Provider>
  );
};

export default feedbackContext;
