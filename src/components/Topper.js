import { Link } from "react-router-dom";

function Topper({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <Link to="/">
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Topper.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Topper;
