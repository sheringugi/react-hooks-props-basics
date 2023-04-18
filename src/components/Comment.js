import React from "react";

// CHILD COMPONENT
function Comment(props) {
  return <div className="comment">{props.commentText}</div>;
}

export default Comment;
