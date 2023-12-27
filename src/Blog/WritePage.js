import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WriteBlogPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    blogText: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const file = name === "image" ? files[0] : null;

    setFormData({
      ...formData,
      [name]: value,
      ...(file && { image: file }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the blog data to the server
      const response = await axios.post("/api/blogs", formData);

      // Check for errors from the server response
      if (response.data.error) {
        setError(response.data.error);
      } else {
        // Reset form data and navigate to the blog page on success
        setFormData({
          title: "",
          summary: "",
          blogText: "",
          image: null,
        });
        navigate("/blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      setError("An unexpected error occurred. Please try again.");

      // Log the complete error object for more details
      console.error("Complete error object:", error);
    }
  };


  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Write a New Blog</h2>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="summary"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Summary:
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            rows="4"
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="blogText"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Blog Text:
          </label>
          <textarea
            id="blogText"
            name="blogText"
            value={formData.blogText}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            rows="8"
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="image"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Image Upload:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*" // Specify accepted file types (images)
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WriteBlogPage;
