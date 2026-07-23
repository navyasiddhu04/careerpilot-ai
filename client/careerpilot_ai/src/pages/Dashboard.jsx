import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Welcome, CareerPilot AI 🚀</h1>
        
      </div>

      <div className="cards">

        <Link to="/resume" className="card">
          <h2>📄 Resume Builder</h2>
          <p>    Create and manage your resume.</p>
        </Link>

        <Link to="/ai-resume" className="card">
  <h2>🤖 AI Resume</h2>
  <p>Generate AI resume summary.</p>
</Link>

        
<Link to="/career-roadmap" className="card">
  <h2>💼 Career Roadmap</h2>
  <p>Personalized career guidance.</p>
</Link>  

        <div className="card">
          <h2>🎤 Interview Prep</h2>
          <p>Practice AI interview questions.</p>
        </div>

        <div className="card">
          <h2>📊 ATS Score</h2>
          <p>Check ATS compatibility.</p>
        </div>

        <div className="card">
          <h2>👤 Profile</h2>
          <p>Manage your account.</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;