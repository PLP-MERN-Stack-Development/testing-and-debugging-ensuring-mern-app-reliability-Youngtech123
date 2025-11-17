const express = require("express");
const router = express.Router();
const {
  createBug,
  getBugs,
  updateBug,
  deleteBug,
} = require("../controllers/bugController");

// Routes
router.post("/", createBug);           // Create a new bug
router.get("/", getBugs);             // Get all bugs
router.put("/:id", updateBug);        // Update a bug by ID
router.delete("/:id", deleteBug);     // Delete a bug by ID

module.exports = router;
