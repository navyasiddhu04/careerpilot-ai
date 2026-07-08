import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        <Link to="/" className="logo-link">
          CareerPilot AI
        </Link>
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="#features">Features</Link>

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;