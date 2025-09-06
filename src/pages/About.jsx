// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

import "./about.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-container">
        <div className="about-overlay">
          <h3>About HamroGhar</h3>
          <h1>Find Your Dream Home With Us</h1>
        </div>
      </div>

      {/* Agency Story Section */}
      <section className="about-hero">
        <div className="about-text">
          <h2>Our Agency Story</h2>
          <p className="subtitle">
            Check out our company story and work process
          </p>

          <p>
            HamroGhar was founded with a simple mission — to make finding, buying,
            and renting homes easier and more transparent for everyone in all over the Nepal.
            We believe that a home is more than just four walls; it’s a place
            where memories are made and dreams take shape.
          </p>

          <p>
            With innovative tools, verified property listings, and expert
            guidance, we empower our clients to make confident real estate
            decisions. Whether you’re a first-time buyer, an investor, or looking
            for a dream rental, HamroGhar is your trusted partner at every step of
            the journey.
          </p>

          <Link to="/signup" className="btn">
          Sign up for free
          </Link>
        </div>

        <div className="about-image"></div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Do You Have Questions?</h2>
          <p>We’ll help you to grow your career and make the right choice.</p>
        </div>
        <div className="cta-button">
          <a href="/Contact" className="cta-btn">
            Contact Us Today
          </a>
        </div>
      </section>

      <footer className="site-footer">
          <div className="footer-container">
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

            <div className="footer-links">
              <div>
                <h4>LAYOUTS</h4>
                <ul>
                  <li><a href="/">Home Page</a></li>
                  <li><a href="/about">About Page</a></li>
                  <li><a href="/Rent">Service Page</a></li>
                  <li><a href="/Buy">Property Page</a></li>
                  <li><a href="/Contact">Contact Page</a></li>
                  <li><a href="/Blog">Blog Page</a></li>
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
                <li><a href="/about">About Page</a></li>
                  <li><a href="/Blog">Blog Page</a></li>
                  <li>Pricing</li>
                  <li><a href="/Login">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

    </div>
  );
}

export default About;