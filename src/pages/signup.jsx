import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.role
    ) {
      setError("⚠️ All fields are required");
    } else if (formData.password.length < 6) {
      setError("⚠️ Password must be at least 6 characters");
    } else if (formData.password !== formData.confirmPassword) {
      setError("⚠️ Passwords do not match");
    } else {
      setError("✅ Signup successful! Redirecting...");
      setTimeout(() => {
        navigate("/login");
      }, 1500); // redirect after 1.5s
    }
  };

  return (
    <>
      <div className="signup-page">
        <div className="auth-container">
          <div className="auth-box">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="agent">Agent</option>
              </select>

              <button type="submit" className="auth-btn">
                Sign Up
              </button>
            </form>

            {error && <p style={{ marginTop: "10px", color: "red" }}>{error}</p>}

            <p>
              Already have an account?{" "}
              <a href="/login" className="auth-link">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ================= Footer ================= */}
      <footer className="site-footer">
        <div className="footer-container">
          {/* Left Side - Logo and Subscribe */}
          <div className="footer-left">
            <h2 className="footer-logo">🏠 Hamro-Ghar</h2>
            <h3>Do You Need Help With Anything?</h3>
            <p>
              Receive updates, hot deals, tutorials, discounts sent straight in
              your inbox every month
            </p>
            <div className="subscribe-box">
              <input type="email" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Right Side - Footer Links */}
          <div className="footer-links">
            <div>
              <h4>LAYOUTS</h4>
              <ul>
                <li>Home Page</li>
                <li>About Page</li>
                <li>Service Page</li>
                <li>Property Page</li>
                <li>Contact Page</li>
                <li>Single Blog</li>
              </ul>
            </div>

            <div>
              <h4>ALL SECTIONS</h4>
              <ul>
                <li>Headers</li>
                <li>Features</li>
                <li>Attractive</li>
                <li>Videos</li>
              </ul>
            </div>

            <div>
              <h4>COMPANY</h4>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Pricing</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Signup;