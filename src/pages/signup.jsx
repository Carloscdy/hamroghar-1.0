import React from "react";
import "./Auth.css";

function Signup() {
  return (
    <div className="signup-page">
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <select required>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>

          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/login" className="auth-link">Login</a>
        </p>
      </div>
    </div>
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

      </div>

  );
}

export default Signup;