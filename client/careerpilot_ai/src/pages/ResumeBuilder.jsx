import { useState } from "react";
import API from "../api/axios";
import "../styles/ResumeBuilder.css";

function ResumeBuilder() {
  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    summary: "",
  });
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.post("/resume/save", resume, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Resume saved successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error saving resume");
    }
  };

  const [loadingSummary, setLoadingSummary] = useState(false);

const handleGenerateSummary = async () => {
  setLoadingSummary(true);
  try {
    const res = await API.post("/ai/resume-summary", {
      fullName: resume.fullName,
      education: resume.education,
      skills: resume.skills,
      projects: resume.projects,
      experience: resume.experience,
    });

    setResume({ ...resume, summary: res.data.summary });
    alert("AI Summary generated!");
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Error generating summary");
  } finally {
    setLoadingSummary(false);
  }
};

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  // Save Resume
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await API.post("/resume", resume, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Resume Save Failed"
      );
    }
  };

  // AI Summary
  const generateSummary = async () => {
    try {
      setLoading(true);

      const res = await API.post("/ai/resume-summary", {
        fullName: resume.fullName,
        education: "",
        skills: "",
        projects: "",
        experience: "",
      });

      setResume({
        ...resume,
        summary: res.data.summary,
      });

    } catch (err) {
      console.log(err);
      alert("AI Summary Failed");
    }

    setLoading(false);
  };

  return (
    <div className="resume-page">

      <div className="resume-card">

        <h1>Resume Builder</h1>

        <form
          onSubmit={handleSubmit}
          className="form-grid"
        >

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={resume.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={resume.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={resume.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={resume.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile"
            value={resume.linkedin}
            onChange={handleChange}
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Profile"
            value={resume.github}
            onChange={handleChange}
          />

          <textarea
            className="full-width"
            name="summary"
            rows="6"
            placeholder="Professional Summary"
            value={resume.summary}
            onChange={handleChange}
          />

          <div className="button-group full-width">

            <button
              type="button"
              className="ai-btn"
              onClick={generateSummary}
              disabled={loading}
            >
              {loading
                ? "Generating..."
                : "✨ Generate AI Summary"}
            </button>
<button className="save-btn" onClick={handleSave}>
  💾 Save Resume
</button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ResumeBuilder;