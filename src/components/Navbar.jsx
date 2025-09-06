import React, { useContext } from "react";
import { NavLink,Link } from "react-router-dom";
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
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/buy">Buy</NavLink></li>
        <li><NavLink to="/rent">Rent</NavLink></li>
        <li><NavLink to="/tools">Tools</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
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