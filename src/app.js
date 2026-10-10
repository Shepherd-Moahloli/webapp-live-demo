// This file initializes the application, sets up routes, and handles server-side logic.

const express = require("express");
const path = require("path");
const colors = require("./components/colors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the public directory
// (changed to serve the public folder in the project root)
app.use(express.static(path.join(__dirname, "..", "public")));

// Optional: ensure root always serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Example route to get colors
app.get("/api/colors", (req, res) => {
  res.json(colors.getColors());
});

// Example route to add a color
app.post("/api/colors", express.json(), (req, res) => {
  const { color } = req.body;
  colors.addColor(color);
  res.status(201).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
