// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001; // Choose a port for your backend

// Enable CORS for all routes
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
