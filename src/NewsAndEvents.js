// NewsAndEvents.js
import React from "react";
import { Link } from "react-router-dom";

const NewsAndEvents = ({ id, image, title, summary }) => {
  const defaultImage =
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"; // Provide a default image URL

  return (
    <div className="news-and-event">
      <div className="image-container">
        <img
          src={image || defaultImage}
          alt="news/event img"
          style={{ width: "50px", height: "50px" }} // Adjust width and height as needed
        />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="summary">{summary}</p>
        <Link to={`/news-and-events/${id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default NewsAndEvents;