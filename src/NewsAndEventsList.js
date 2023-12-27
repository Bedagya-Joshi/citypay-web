// NewsAndEventsList.js
import React from "react";
import { Link } from "react-router-dom";
import NewsAndEvents from "./NewsAndEvents";

const NewsAndEventsList = ({ newsAndEventsData }) => {
  return (
    <div className="news-and-events-list">
      <h2>News and Events</h2>
      {newsAndEventsData.slice(0, 6).map((item) => (
        <NewsAndEvents key={item.id} {...item} />
      ))}
      <Link to="/all-news-and-events">View All News and Events</Link>
    </div>
  );
};

export default NewsAndEventsList;
