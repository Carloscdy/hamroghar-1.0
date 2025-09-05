import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="Hamro Ghar Logo" height="50" />
        </Link>
      </div>

      {/* Middle - Nav Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      {/* Right Side - Actions */}
      <div className="navbar-actions">
        {/* ✅ Post Property button before login/signup */}
        <Link to="/post-property" className="post-property-link">
          Post Property
        </Link>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            Login / Signup
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;