const Bug = require("../models/Bug");

// Create a new bug
const createBug = async (req, res, next) => {
  try {
    const { title, description, status, priority } = req.body;
    const bug = await Bug.create({ title, description, status, priority });
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
};

// Get all bugs
const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    next(error);
  }
};

// Update a bug by ID
const updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const bug = await Bug.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.status(200).json(bug);
  } catch (error) {
    next(error);
  }
};

// Delete a bug by ID
const deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndDelete(id);
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.status(200).json({ message: "Bug deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBug,
  getBugs,
  updateBug,
  deleteBug,
};
