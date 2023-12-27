import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Create a navigate function
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState(false); // State to track login errors

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = formData;
    const isAuthenticated = login(username, password);

    if (isAuthenticated) {
      // Navigate to the blog page upon successful login
      navigate("/blog");
    } else {
      // Handle unsuccessful login
      setLoginError(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {loginError && (
          <div style={{ color: "red" }}>
            Password incorrect. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
