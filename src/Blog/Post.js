// Post.js
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ id, image, title, author, timestamp, summary }) => {
  const defaultImage =
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg";
  return (
    <div className="post">
      <img src={image || defaultImage} alt="blog img" />
      <div className="texts">
        <h2>{title}</h2>
        <div className="info">
          <a className="author">{author}</a>
          <time>{timestamp}</time>
        </div>
        <p className="summary">{summary}</p>
        <Link to={`/blog/${id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default Post;
