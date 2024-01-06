function Card({ children, reverse }) {
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "#333" : "#fff",
        color: reverse ? "#fff" : "#333",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
