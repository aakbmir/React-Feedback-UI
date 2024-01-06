import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topper from "./components/Topper";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import { FeedbackProvider } from "./context/FeedbackContext";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function AppComponent() {
  return (
    <FeedbackProvider>
      <Router>
        <Topper />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default AppComponent;
