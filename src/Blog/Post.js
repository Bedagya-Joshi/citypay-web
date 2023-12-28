import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Post = ({ _id, mainImage, title, author, publishedAt, summary }) => {
  const [imageURL, setImageURL] = useState(null);
  const [formattedDateTime, setFormattedDateTime] = useState("");

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        let imageUrl;

        // For testing, use a placeholder image URL
        imageUrl = "https://via.placeholder.com/150";

        setImageURL(imageUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error);
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
      {imageURL && (
        <img
          src={imageURL}
          alt={title}
          style={{ width: "10%", height: "10%" }}
        />
      )}
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
