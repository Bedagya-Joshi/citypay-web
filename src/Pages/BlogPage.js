import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import client from "../services/sanityClient";
import Post from "../Blog/Post";
import FullPost from "../Blog/FullPost";
import "../App.css";

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await client.fetch(`
          *[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            mainImage,
            author->{_id, name},
            publishedAt,
            summary
          }`);
        console.log("Sanity Response:", response);

        setBlogs(response);
        setLoading(false);

        const totalBlogs = response.length;
        setTotalPages(Math.ceil(totalBlogs / POSTS_PER_PAGE));
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchBlogs();
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
            {loading && <div className="loading-container"><h1 className="loading-header">Loading...</h1></div>}
            {!loading && blogs.length === 0 && (
              <div className="no-blogs-container"><h1 className="noblogs">No blogs found.</h1></div>
            )}
            {!loading &&
              blogs.length > 0 &&
              blogs
                .slice(
                  (currentPage - 1) * POSTS_PER_PAGE,
                  currentPage * POSTS_PER_PAGE
                )
                .map((blog) => <Post key={blog._id} {...blog} />)}
            {!loading && totalPages > 1 && (
              <div className="page-btn">
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
      <Route path=":postId" element={<FullPost/>} />
    </Routes>
  );
};

export default BlogPage;
