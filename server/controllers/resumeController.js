const Resume = require("../models/Resume");

// =========================
// Create Resume
// =========================
const createResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      user: req.user.id,
      ...req.body,
    });

    res.status(201).json({
      message: "Resume Created Successfully",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Get My Resume
// =========================
const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Update Resume
// =========================
const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { user: req.user },
      req.body,
      {
        new: true,
      }
    );

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json({
      message: "Resume Updated Successfully",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Delete Resume
// =========================
const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json({
      message: "Resume Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createResume,
  getResume,
  updateResume,
  deleteResume,
};