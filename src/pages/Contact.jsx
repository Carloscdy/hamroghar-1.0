import React from "react";
import "./Contact.css"; // custom styles
import backgroundImage from "../assets/images/bg1.jpg";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="contacts-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h1>Easy way to find a perfect property</h1>
          <p>
            We help clients buy, sell, and rent properties all across Nepal.
            Wherever you’re planning your next move, we’re here to guide you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>

          {/* Grid: Form + Office */}
          <div className="contact-grid">
            {/* Left: Form */}
            <div className="contact-form">
              <h3>Get in Touch</h3>
              <form>
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Your Name" />

                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="you@example.com" />

                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Type your message..."></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

            {/* Right: Office Info */}
            <div className="contact-office">
              <h3>Our Office</h3>
              <p><strong>📧 Email:</strong> contact@lalpurjanepal.com.np</p>
              <p><strong>📞 Phone:</strong> 014352618, 9851342035</p>
              <p><strong>📍 Address:</strong> Bharatpur, Chitwan, Nepal</p>
            </div>
          </div>

          {/* Map Full Width */}
          <div className="contact-map">
            <iframe
              title="Office Location - Bharatpur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.072425274155!2d84.43333!3d27.68333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fbd5f93c8f9b%3A0x90b52a4f6b96d3c4!2sBharatpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1690000000000!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

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

export default Contact;
