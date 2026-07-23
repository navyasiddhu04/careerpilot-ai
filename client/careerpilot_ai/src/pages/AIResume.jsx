import { useState } from "react";
import API from "../api/axios";
import "./AIResume.css";

function AIResume() {
  const [formData, setFormData] = useState({
    fullName: "",
    education: "",
    skills: "",
    projects: "",
    experience: "",
  });
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    setLoading(true);
    setSummary("");
    try {
      const res = await API.post("/ai/resume-summary", formData);
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error generating summary");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-resume-container">
      <h1>🤖 AI Resume Summary Generator</h1>
      <p>Apni details bharo, AI tumhare liye professional summary bana dega.</p>

      <div className="ai-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <textarea
          name="education"
          placeholder="Education (e.g. B.Tech CSE, XYZ University, 2026)"
          value={formData.education}
          onChange={handleChange}
        />
        <textarea
          name="skills"
          placeholder="Skills (comma separated: React, Node.js, MongoDB)"
          value={formData.skills}
          onChange={handleChange}
        />
        <textarea
          name="projects"
          placeholder="Projects (short description)"
          value={formData.projects}
          onChange={handleChange}
        />
        <textarea
          name="experience"
          placeholder="Experience (if any)"
          value={formData.experience}
          onChange={handleChange}
        />

        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "✨ Generate Summary"}
        </button>
      </div>

      {summary && (
        <div className="ai-result">
          <h3>Generated Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default AIResume;