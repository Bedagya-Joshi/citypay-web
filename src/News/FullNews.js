// FullNews.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../services/sanityClient";
// import "../App.css"
import "../Blog/post.css";

const FullNews = () => {
  const { newsId } = useParams();
  const [imageURL, setImageURL] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsResponse = await client.fetch(
          `*[_type == "news" && _id == $newsId][0]{
            title,
            mainImage,
            author->{_id, name},
            publishedAt,
            body,
          }`,
          { newsId }
        );
        console.log(newsResponse);

        const imageRef = newsResponse.mainImage.asset._ref;
        const [, imageId, imageDim, imageExtension] = imageRef.split("-");
        const imageUrl = `https://cdn.sanity.io/images/gfx5cjiu/production/${imageId}-${imageDim}.${imageExtension}`;

        setNews(newsResponse);
        setImageURL(imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [newsId]);

  const renderBlockContent = (content) => {
    return content.map((block, index) => {
      if (block._type === "block" && block.children) {
        return (
          <p key={index}>
            {block.children.map((child) => child.text).join(" ")}
          </p>
        );
      } else {
        return null;
      }
    });
  };

  if (!news) {
    return (
      <div className="loading-container">
        <h1 className="loading-header">Loading....</h1>
      </div>
    );
  }

  return (
    <div class="post-container">
      {news.mainImage && news.mainImage.asset && (
        <div class="post-image">
        <img
          src={imageURL}
          alt={news.title}
          class="fullpost-image"
        />
        </div>
      )}
      <div class="post-title">
        <h2>{news.title}</h2>
        {news.author && <p>by {news.author.name}</p>}
        <p>{new Date(news.publishedAt).toLocaleString()}</p>
      </div>
      <div class="post-body">
        {news.body && Array.isArray(news.body) && renderBlockContent(news.body)}
      </div>
    </div>
  );
};

export default FullNews;
