// Post.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ _id, mainImage, title, author, publishedAt, summary }) => {
  const [imageURL, setImageURL] = useState(null);
  const [formattedDateTime, setFormattedDateTime] = useState("");

  useEffect(() => {
    const fetchImageURL = () => {
      try {
        let imageUrl;

        if (mainImage && mainImage.asset && mainImage.asset._ref) {
          const imageRef = mainImage.asset._ref;
          const [, imageId, imageDim, imageExtension] = imageRef.split("-");
          imageUrl = `https://cdn.sanity.io/images/gfx5cjiu/production/${imageId}-${imageDim}.${imageExtension}`;
        }

        setImageURL(imageUrl);
      } catch (error) {
        console.error("Error constructing image URL:", error);
      }
    };

    fetchImageURL();

    // Format the date and time
    const date = new Date(publishedAt);
    const formattedDate = date.toLocaleDateString(); // Adjust the format as needed
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setFormattedDateTime(`${formattedDate} ${formattedTime}`);
  }, [mainImage, publishedAt]);

  return (
    <div className="post">
      <div className="image-container">
        {imageURL && <img src={imageURL} alt={title} className="image" />}
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <div className="info">
          <p>by {author && author.name}</p>
          <p>{formattedDateTime}</p>
        </div>
        <div className="summary">
          {summary &&
            summary.map((block, index) => (
              <p key={index}>
                {block.children.map((child) => child.text).join(" ")}
              </p>
            ))}
        </div>
        <Link to={`/blog/${_id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default Post;
