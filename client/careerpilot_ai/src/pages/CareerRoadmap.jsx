import { useState } from "react";
import API from "../api/axios";
import "./CareerRoadmap.css";

function CareerRoadmap() {
  const [goal, setGoal] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!goal.trim()) {
      alert("Please enter your career goal");
      return;
    }
    setLoading(true);
    setRoadmap("");
    try {
      const res = await API.post("/ai/career-roadmap", { goal });
      setRoadmap(res.data.roadmap);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error generating roadmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="roadmap-container">
      <h1>💼 Career Roadmap Generator</h1>
      <p>Apna career goal likho, AI tumhare liye step-by-step roadmap banayega.</p>

      <div className="roadmap-form">
        <input
          type="text"
          placeholder="e.g. Full Stack Developer, Data Scientist, React Developer"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "✨ Generate Roadmap"}
        </button>
      </div>

      {roadmap && (
        <div className="roadmap-result">
          <h3>Your Roadmap:</h3>
          <p style={{ whiteSpace: "pre-line" }}>{roadmap}</p>
        </div>
      )}
    </div>
  );
}

export default CareerRoadmap;