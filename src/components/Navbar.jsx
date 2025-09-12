// src/components/Navbar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

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
        <li><NavLink to="/tools">Tooals</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
      </ul>

      {/* Right Side - Actions */}
      <div className="navbar-actions">
        <Link to="/post-property" className="post-property-link">
          Post Property
        </Link>

        {isSignedIn ? (
          <div className="navbar-user">
            <UserButton />
            <span className="navbar-username" style={{ marginLeft: 8 }}>
              {user?.fullName || user?.firstName || ""}
            </span>
          </div>
        ) : (
          <button
          onClick={() => openSignIn()}
          className="login-btn"
        >
          Login
        </button>
        
        )}
      </div>
    </nav>
  );
};

export default Navbar;
