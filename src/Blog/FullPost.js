// FullPost.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/blogs/${postId}`
        );
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Log postId and post to the console
  console.log("postId:", postId);
  console.log("post:", post);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.blogText}</p>
    </div>
  );
};

export default FullPost;
