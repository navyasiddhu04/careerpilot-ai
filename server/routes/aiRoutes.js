const {
  resumeSummary,
  careerRoadmap,
} = require("../controllers/aiController");


const express = require("express");

const router = express.Router();

router.post("/resume-summary", resumeSummary);
router.post("/career-roadmap", careerRoadmap);
module.exports = router;