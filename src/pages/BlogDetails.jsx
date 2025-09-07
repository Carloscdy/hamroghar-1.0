import React from "react";
import { useLocation } from "react-router-dom";
import "./BlogDetails.css";


function BlogDetails() {
  const location = useLocation();
  const post = location.state;

  if (!post) {
    return (
      <div className="no-post">
        <p>No blog data found.</p>
      </div>
    );
  }

  return (
    <>
      
      <div className="blog-details">
        <div className="blog-container">
          {/* Left: Image */}
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>

          {/* Right: Content */}
          <div className="blog-text">
            <h1>{post.title}</h1>
            <div className="meta">
              <span>{post.date}</span>
              <span>{post.views} views</span>
            </div>
            <p>{post.details}</p>
          </div>
        </div>
      </div>

{/* ================= Footer ================= */}
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

    </>
  );
}

export default BlogDetails;
