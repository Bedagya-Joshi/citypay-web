// News.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../services/sanityClient";

const News = ({ _id, mainImage, title, author, publishedAt, summary }) => {
  const [imageURL, setImageURL] = useState(null);
  const [formattedDateTime, setFormattedDateTime] = useState("");

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        let imageUrl;

        if (mainImage?._type === "image" && mainImage.asset) {
          imageUrl = mainImage.asset.url;
        } else if (mainImage?._ref) {
          const imageDetails = await client.fetch(
            `*[_id == '${mainImage._ref}'][0] {
              asset {
                url
              }
            }`
          );
          console.log(imageDetails);

          imageUrl =
            "https://cdn.sanity.io/images/gfx5cjiu/production/21f9795a131c32180f6fa92575732afd29225ea0-135x135.jpg?rect=0,0,135,70&w=2000&fit=max&auto=format&dpr=2";
        }

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
    <div className="news">
      <img
        src={
          "https://cdn.sanity.io/images/gfx5cjiu/production/21f9795a131c32180f6fa92575732afd29225ea0-135x135.jpg?rect=0,0,135,70&w=2000&fit=max&auto=format&dpr=2"
        }
        alt={title}
        style={{width: "auto", height: "150px", paddingRight: "10px"}}
      />
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
        <Link to={`/news/${_id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default News;
