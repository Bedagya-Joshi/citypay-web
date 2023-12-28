import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../services/sanityClient";

const FullPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the post with the specified ID
        const postResponse = await client.fetch(
          `*[_type == "post" && _id == $postId][0]{
            title,
            author->{_id, name}, // Fetch only _id and name from the author reference
            publishedAt,
            body
          }`,
          { postId }
        );

        setPost(postResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [postId]);

  const renderBlockContent = (content) => {
    return content.map((block, index) => {
      if (block._type === "block" && block.children) {
        // Render text block
        return (
          <p key={index}>
            {block.children.map((child) => child.text).join(" ")}
          </p>
        );
      } else {
        return null; // Handle other block types as needed
      }
    });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      {post.author && <p>by {post.author.name}</p>}
      <p>{new Date(post.publishedAt).toLocaleString()}</p>
      {post.body && Array.isArray(post.body) && renderBlockContent(post.body)}
    </div>
  );
};

export default FullPost;
