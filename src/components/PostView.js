import React from "react";
import { getFormatDate } from "../utils/date";
import "../assets/css/postView.css";

function PostView(props) {
  const { post, editable, onEditClick } = props;
  return (
    <div className="postView">
      <div>
        <h2>{post.title}</h2>
        <div className="mark">
          <span className="author">{post.author.username}</span>
          <span>·</span>
          <span>{getFormatDate(post.updatedAt)}</span>
          {editable ? (
            <span>
              ·<button onClick={onEditClick}>编辑</button>
            </span>
          ) : null}
        </div>
        <div className="content">{post.content}</div>
      </div>
      <div className="vote">
        <span role="img" aria-label="👍">👍</span>
        <span>{post.vote}</span>
      </div>
    </div>
  );
}

export default PostView;
