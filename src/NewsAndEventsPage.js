// NewsAndEventsPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewsAndEventsPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/events/${itemId}`
        );
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt="news/event img" />
      <p>{item.eventText}</p>
    </div>
  );
};

export default NewsAndEventsPage;
