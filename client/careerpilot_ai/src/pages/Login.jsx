import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", {
        email: formData.email,
        password: formData.password,
      });

      // Save Token
      localStorage.setItem("token", res.data.token);

      // Save User
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message);

      navigate("/dashboard");

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="auth-container">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;