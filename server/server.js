const express = require("express");
const mongoose = require("mongoose");
const bugRoutes = require("./src/routes/bugRoutes");
const logger = require("./src/middleware/logger");


const app = express();

// Middleware
app.use(logger);
app.use(express.json());

// Routes
app.use("/api/bugs", bugRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

// Connect to MongoDB and start server (for development)
if (process.env.NODE_ENV !== "test") {
  mongoose.connect("mongodb://localhost:27017/bugtracker", {
    // no need for deprecated options
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.error(err));
}

module.exports = app; // Export for testing
