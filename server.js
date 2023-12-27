// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001; // Choose a port for your backend

// Enable CORS for all routes
app.use(cors());

// In-memory database (replace this with a real database in a production setting)
const blogs = [
  {
    id: 1,
    title: "Test Blog 1",
    author: "John Doe",
    timestamp: "2023-01-01 12:00",
    summary: "This is a test blog post.",
    blogText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "Test Blog 2",
    author: "Bedagya Raj Joshi",
    timestamp: "2023-01-03 15:00",
    summary: "This is a test blog post.",
    blogText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    title: "Test Blog 3",
    author: "Admin",
    timestamp: "2023-03-12 5:00",
    summary: "This is a test blog post.",
    blogText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 4,
    title: "Test Blog 4",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test blog post.",
    blogText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 5,
    title: "Test Blog 5",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test blog post.",
    blogText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 6,
    title: "Test Blog 6",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test blog post.",
    blogText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 7,
    title: "Test Blog 7",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test blog post.",
    blogText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  // Add more sample blog data as needed
];

// Endpoint to get all blogs
app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

// Endpoint to get a specific blog by ID
app.get("/api/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === blogId);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

const events = [
  {
    id: 1,
    title: "Test event 1",
    author: "John Doe",
    timestamp: "2023-01-01 12:00",
    summary: "This is a test event post.",
    eventText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "Test event 2",
    author: "Bedagya Raj Joshi",
    timestamp: "2023-01-03 15:00",
    summary: "This is a test event post.",
    eventText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    title: "Test event 3",
    author: "Admin",
    timestamp: "2023-03-12 5:00",
    summary: "This is a test event post.",
    eventText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 4,
    title: "Test event 4",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test event post.",
    eventText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 5,
    title: "Test event 5",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test event post.",
    eventText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 6,
    title: "Test event 6",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test event post.",
    eventText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 7,
    title: "Test event 7",
    author: "City Pay",
    timestamp: "2023-12-12 16:00",
    summary: "This is a test event post.",
    eventText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  // Add more sample event data as needed
];

// Endpoint to get all events
app.get("/api/events", (req, res) => {
  res.json(events);
});

// Endpoint to get a specific event by ID
app.get("/api/events/:id", (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find((b) => b.id === eventId);

  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ error: "event not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
