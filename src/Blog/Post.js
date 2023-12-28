import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../services/sanityClient";

const Post = ({ _id, mainImage, title, author, publishedAt, summary }) => {
  const [imageURL, setImageURL] = useState(null);
  const [formattedDateTime, setFormattedDateTime] = useState("");

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        // Check if mainImage is an object with _type 'image' and contains asset property
        if (mainImage?._type === "image" && mainImage.asset) {
          const imageUrl = mainImage.asset.url;
          setImageURL(imageUrl);
        } else {
          // Fetch the image details using the reference
          const imageDetails = await client.fetch(
            `*[_id == '${mainImage._ref}'][0]`
          );

          // Extract the URL from the image details
          const imageUrl = imageDetails?.asset?.url;

          setImageURL(imageUrl);
        }
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    if (mainImage?._ref) {
      fetchImageURL();
    }

    // Format the date and time
    const date = new Date(publishedAt);
    const formattedDate = date.toLocaleDateString(); // Adjust the format as needed
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setFormattedDateTime(`${formattedDate} ${formattedTime}`);
  }, [mainImage, publishedAt]);

  // Function to render block content
  const renderBlockContent = (content) => {
    return content.map((block, index) => {
      if (block._type === "block" && block.children) {
        // Render text block
        return (
          <p key={index}>
            {block.children.map((child) => child.text).join(" ")}
          </p>
        );
      } else {
        return null; // Handle other block types as needed
      }
    });
  };

  return (
    <div className="post">
      {imageURL && <img src={imageURL} alt="blog img" />}
      <div className="texts">
        <h2>{title}</h2>
        <div className="info">
          <a className="author">{author && author.name}</a>
          <time>{formattedDateTime}</time>
        </div>
        <div className="summary">{summary && renderBlockContent(summary)}</div>
        <Link to={`/blog/${_id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default Post;
