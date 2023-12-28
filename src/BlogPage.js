import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import client from "./services/sanityClient";
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
        const response = await client.fetch(`
          *[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            mainImage,
            author->{_id, name}, // Include author information in the query
            publishedAt,
            summary
          }`);
        console.log("Sanity Response:", response);

        setBlogs(response);

        const totalBlogs = response.length;
        setTotalPages(Math.ceil(totalBlogs / POSTS_PER_PAGE));
      } catch (error) {
        console.error(error);
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
            {blogs
              .slice(
                (currentPage - 1) * POSTS_PER_PAGE,
                currentPage * POSTS_PER_PAGE
              )
              .map((blog) => (
                <Post key={blog._id} {...blog} />
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
      <Route path=":postId" element={<FullPost />} />
    </Routes>
  );
};

export default BlogPage;