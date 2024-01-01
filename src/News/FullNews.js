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
            mainImage,
            author->{_id, name},
            publishedAt,
            body,
          }`,
          { newsId }
          );
          console.log(newsResponse);

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
          src={
            "https://cdn.sanity.io/images/gfx5cjiu/production/21f9795a131c32180f6fa92575732afd29225ea0-135x135.jpg?rect=0,0,135,70&w=2000&fit=max&auto=format&dpr=2"
          }
          alt={news.title}
          style={{ width: "550px"}}
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
