// BlogPage.js
import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "./Blog/Post";
import FullPost from "./Blog/FullPost";

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/blogs");
        setBlogs(response.data);

        // Calculate the total number of pages based on the number of blogs
        const totalBlogs = response.data.length;
        setTotalPages(Math.ceil(totalBlogs / POSTS_PER_PAGE));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <div className="blogNav">
              <Link to="/write">Write Blog</Link>
              <Link to="/login">Login</Link>
            </div>
            {blogs
              .slice(
                (currentPage - 1) * POSTS_PER_PAGE,
                currentPage * POSTS_PER_PAGE
              )
              .map((blog) => (
                <Post key={blog.id} {...blog} />
              ))}
            {totalPages > 1 && (
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
      {/* Add a new route for displaying the full content of a blog post */}
      <Route path="/blog/:postId" element={<FullPost />} />
    </Routes>
  );
};

export default BlogPage;
