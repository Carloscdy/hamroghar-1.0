import React, { useState } from "react";
import "./Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("⚠️ Please enter your email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("⚠️ Invalid email format");
    } else {
      // Here you would normally call your backend API to send reset email
      setMessage("Reset link has been sent to your email (frontend only)");
    }
  };

  return (
    <>
      {/* =============== Forgot Password Form =============== */}
      <div className="forgot-page">
        <div className="auth-container">
          <div className="auth-box">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="auth-btn">
                Send Reset Link
              </button>
            </form>

            {message && (
              <p className={message.includes("") ? "success" : "error"}>
                {message}
              </p>
            )}

            <p>
              Remembered your password?{" "}
              <a href="/login" className="auth-link">
                Login
              </a>
            </p>
          </div>
        </div>

        {/* =============== Footer =============== */}
        <footer className="site-footer">
          <div className="footer-container">
            {/* Left Side */}
            <div className="footer-left">
              <h2 className="footer-logo">🏠 Hamro-Ghar</h2>
              <h3>Do You Need Help With Anything?</h3>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight
                in your inbox every month
              </p>
              <div className="subscribe-box">
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>

            {/* Right Side */}
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
      </div>
    </>
  );
}

export default ForgotPassword;
