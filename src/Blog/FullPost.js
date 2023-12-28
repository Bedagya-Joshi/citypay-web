import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../services/sanityClient";

const FullPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await client.fetch(
          `*[_type == "post" && _id == $postId][0]{
            title,
            author->{_id, name},
            publishedAt,
            body,
            mainImage
          }`,
          { postId }
        );

        console.log("Post Response:", postResponse); // Log the response

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

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {post.mainImage && post.mainImage.asset && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          style={{ width: "100%" }}
        />
      )}
      <h2>{post.title}</h2>
      {post.author && <p>by {post.author.name}</p>}
      <p>{new Date(post.publishedAt).toLocaleString()}</p>
      {post.body && Array.isArray(post.body) && renderBlockContent(post.body)}
    </div>
  );
};

export default FullPost;
