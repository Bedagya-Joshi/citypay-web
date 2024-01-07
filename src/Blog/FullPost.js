import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../services/sanityClient";
import "../App.css"

const FullPost = () => {
  const { postId } = useParams();
  const [imageURL, setImageURL] = useState(null);
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

        const imageRef = postResponse.mainImage.asset._ref;
        const [, imageId, imageDim, imageExtension] = imageRef.split("-");
        const imageUrl = `https://cdn.sanity.io/images/gfx5cjiu/production/${imageId}-${imageDim}.${imageExtension}`;

        setPost(postResponse);
        setImageURL(imageUrl);

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
    return (
      <div className="loading-container">
        <h1 className="loading-header">Loading....</h1>
      </div>
    );
  }

  return (
    <div>
      {post.mainImage && post.mainImage.asset && (
        <img src={imageURL} alt={post.title} style={{ width: "450px", height: "auto" }} />
      )}
      <h2>{post.title}</h2>
      {post.author && <p>by {post.author.name}</p>}
      <p>{new Date(post.publishedAt).toLocaleString()}</p>
      {post.body && Array.isArray(post.body) && renderBlockContent(post.body)}
    </div>
  );
};

export default FullPost;
