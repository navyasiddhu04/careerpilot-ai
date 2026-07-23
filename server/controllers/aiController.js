const {
  generateResumeSummary,
  generateCareerRoadmap,
} = require("../services/geminiService");

// Resume Summary Controller
const resumeSummary = async (req, res) => {
  try {
    const summary = await generateResumeSummary(req.body);

    res.status(200).json({
      success: true,
      summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Career Roadmap Controller
const careerRoadmap = async (req, res) => {
  try {
    const { goal } = req.body;

    const roadmap = await generateCareerRoadmap(goal);

    res.status(200).json({
      success: true,
      roadmap,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  resumeSummary,
  careerRoadmap,
};