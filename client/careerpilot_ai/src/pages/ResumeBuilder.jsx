import { useState } from "react";
import API from "../api/axios";

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

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

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

      console.log(res.data);

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
        "Resume Save Failed"
      );
    }
  };

  return (
    <div className="resume-container">
      <h1>Resume Builder</h1>

      <form onSubmit={handleSubmit}>

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
          name="summary"
          placeholder="Professional Summary"
          rows="5"
          value={resume.summary}
          onChange={handleChange}
        />

        <button type="submit">
          Save Resume
        </button>

      </form>
    </div>
  );
}

export default ResumeBuilder;