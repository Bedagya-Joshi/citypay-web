// FullNews.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../services/sanityClient";

const FullNews = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsResponse = await client.fetch(
          `*[_type == "news" && _id == $newsId][0]{
            title,
            author->{_id, name},
            publishedAt,
            body,
            mainImage
          }`,
          { newsId }
        );

        setNews(newsResponse);
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      {news.mainImage && news.mainImage.asset && (
        <img
          src={news.mainImage.asset.url}
          alt={news.title}
          style={{ width: "100%" }}
        />
      )}
      <h2>{news.title}</h2>
      {news.author && <p>by {news.author.name}</p>}
      <p>{new Date(news.publishedAt).toLocaleString()}</p>
      {news.body && Array.isArray(news.body) && renderBlockContent(news.body)}
    </div>
  );
};

export default FullNews;
