function Test() {
    const title = "My App";
    const comments = [
      { id: "1", text: "Comment One" },
      { id: "2", text: "Comment Two" },
      { id: "3", text: "Comment Three" },
    ];
    const showCommentSection = false;
  
    const commentBlock = (
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    );
  
    return (
      <>
        <Header />
        <div className="container">
          <h1>{title}</h1>
          {showCommentSection && commentBlock}
        </div>
      </>
    );
  }
  
  