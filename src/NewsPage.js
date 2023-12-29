import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import client from "./services/sanityClient";
import News from "./News/News";
import FullNews from "./News/FullNews";

const NEWS_PER_PAGE = 6;

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await client.fetch(`
          *[_type == "news"] | order(publishedAt desc) {
            _id,
            title,
            mainImage,
            author->{_id, name},
            publishedAt,
            summary
          }`);
        console.log("Sanity Response:", response);

        setNews(response);
        setLoading(false);

        const totalNews = response.length;
        setTotalPages(Math.ceil(totalNews / NEWS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };


    fetchNews();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Routes>
      <Route
        index
        element={
          <main>
            {loading && <div>Loading...</div>}
            {!loading &&
              news
                .slice(
                  (currentPage - 1) * NEWS_PER_PAGE,
                  currentPage * NEWS_PER_PAGE
                )
                .map((news) => <News key={news._id} {...news} />)}
            {!loading && totalPages > 1 && (
              <div>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous Page
                </button>
                <span>Page {currentPage}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next Page
                </button>
              </div>
            )}
          </main>
        }
      />
      <Route path=":newsId" element={<FullNews />} />
    </Routes>
  );
};

export default NewsPage;
