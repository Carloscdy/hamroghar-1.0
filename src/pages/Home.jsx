import React from "react";
import backgroundImage from "../assets/images/bg1.jpg";
import propertyImg1 from "../assets/images/bg.jpg";
import propertyImg2 from "../assets/images/bg2.jpg";
import propertyImg3 from "../assets/images/bg3.png";
import propertyImg4 from "../assets/images/bg4.png";
import propertyImg5 from "../assets/images/bg5.png";
import "./Home.css"; // custom CSS

function Home() {
  return (
    <>
      {/* ✅ Hero Section (works fine, no change) */}
      <div
        className="hero-section h-[60vh] relative flex items-center justify-start overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="slogan-container z-10 p-8 md:p-16 max-w-xl text-black">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">
            Easy way to find a perfect property
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide a complete service for the sale, purchase or rental of
            real estate
          </p>

          {/* Search Box */}
          <div className="search-box">
            {/* Tabs */}
            <div className="search-tabs">
              <button className="active">Rent</button>
              <button>Buy</button>
              <button>Sell</button>
            </div>

            {/* Filters */}
            <div className="search-filters">
              <div>
                <label>Location</label>
                <select>
                  <option>Select Your City</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
              </div>

              <div>
                <label>Property Type</label>
                <select>
                  <option>Choose Property Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                </select>
              </div>

              <div>
                <label>Price Range</label>
                <select>
                  <option>Choose Price Range</option>
                  <option>$500 – $1000</option>
                  <option>$1000 – $2000</option>
                  <option>$2000+</option>
                </select>
              </div>

              <button>🔍 Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Wrap below Hero Section with CSS classes */}
      <div className="home-sections">
        {/* ================= New Properties Section ================= */}
        <section className="section services">
          <div className="flex-1">
            <img
              src={propertyImg1}
              alt="Property Service"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="services-content">
            <h2>We’ve got new properties for everyone</h2>
            <p>
              One place to manage rentals, 600+ Apartments, 250+ Plots, and 60+
              Villas. Start your journey with us today!
            </p>
            <ul>
              <li>🏢 600+ Apartments – modern living</li>
              <li>🌍 250+ Plots – build your dream</li>
              <li>🏡 60+ Villas – explore with us</li>
            </ul>
            <button>Explore</button>
          </div>
        </section>

        {/* ================= Featured Properties ================= */}
        <section className="section featured-properties">
          <h2 className="section-title">Featured Properties</h2>
          <div className="featured-grid">
            {/* Card 1 */}
            <div className="property-card">
              <img src={propertyImg2} alt="Property" />
              <div className="property-info">
                <h3>2BHK in Bhaktapur</h3>
                <p>Rs.15 Lakh</p>
                <button>View Details</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="property-card">
              <img src={propertyImg3} alt="Property" />
              <div className="property-info">
                <h3>3BHK in Bhaktapur</h3>
                <p>Rs.25 Lakh</p>
                <button>View Details</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="property-card">
              <img src={propertyImg4} alt="Property" />
              <div className="property-info">
                <h3>Studio in Lalitpur</h3>
                <p>Rs.12 Lakh</p>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-agents">
  <div className="text-center mb-12">
    <h2>Our Featured Agents</h2>
    <p>
      Meet our trusted real estate agents who are ready to guide you in
      finding the perfect property. With years of experience and a passion
      for helping clients, they make buying, selling, or renting simple and
      stress-free.
    </p>
  </div>

  <div className="agents-grid">
    {/* Agent Card 1 */}
    <div className="agent-card">
      <span className="listings-badge">51 Listings</span>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Agent" />
      <p>Liverpool, Canada</p>
      <h3>Sargam S. Singh</h3>
      <div className="socials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <button className="message-btn">Message</button>
      <button className="call-btn">📞</button>
    </div>

    {/* Agent Card 2 */}
    <div className="agent-card">
      <span className="listings-badge">70 Listings</span>
      <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Agent" />
      <p>Montreal, Canada</p>
      <h3>Harjeet M. Siller</h3>
      <div className="socials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <button className="message-btn">Message</button>
      <button className="call-btn">📞</button>
    </div>

    {/* Agent Card 3 */}
    <div className="agent-card">
      <span className="listings-badge">60 Listings</span>
      <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Agent" />
      <p>Denver, USA</p>
      <h3>Anna K. Young</h3>
      <div className="socials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <button className="message-btn">Message</button>
      <button className="call-btn">📞</button>
    </div>
  </div>
</section>





        {/* ================= Why Choose Us ================= */}
        <section className="section why-choose">
          <div className="why-content">
            <h2>Why Choose Hamro-Ghar?</h2>
            <p>
              We help you find verified properties with ease. Our platform
              supports virtual tours, EMI calculation, visit bookings, and more.
            </p>
            <button>Contact Us</button>
          </div>
          <div className="flex-1">
            <img
              src={propertyImg5}
              alt="Why Choose Us"
              className="rounded-lg shadow-md"
            />
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

      </div>
    </>
  );
}

export default Home;
