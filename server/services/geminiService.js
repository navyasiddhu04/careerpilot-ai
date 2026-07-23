const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateResumeSummary = async (resumeData) => {

  const prompt = `
You are an expert resume writer.

Create a professional ATS-friendly resume summary.

Candidate Details:

Name: ${resumeData.fullName}

Education: ${resumeData.education}

Skills: ${resumeData.skills}

Projects: ${resumeData.projects}

Experience: ${resumeData.experience}

Instructions:
- Write 4-5 professional lines.
- Keep it ATS friendly.
- Don't use bullet points.
- Make it suitable for software developer internships.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

const generateCareerRoadmap = async (goal) => {

  const prompt = `
Create a detailed roadmap for becoming a ${goal}.

Include:
- Skills to learn
- Technologies
- Projects
- Certifications
- Timeline
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  generateResumeSummary,
  generateCareerRoadmap,
};