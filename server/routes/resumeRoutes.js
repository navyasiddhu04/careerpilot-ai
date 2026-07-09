const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createResume,
  getResume,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");

// Create Resume
router.post("/", protect, createResume);

// Get Resume
router.get("/", protect, getResume);

// Update Resume
router.put("/", protect, updateResume);

// Delete Resume
router.delete("/", protect, deleteResume);

module.exports = router;