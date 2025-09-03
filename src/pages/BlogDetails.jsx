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
    </>
  );
}

export default BlogDetails;
