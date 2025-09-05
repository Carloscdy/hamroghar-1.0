// Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/bg1.jpg";
import propertyImg1 from "../assets/images/bg.jpg";
import propertyImg2 from "../assets/images/bg2.jpg";
import propertyImg3 from "../assets/images/bg3.png";
import propertyImg4 from "../assets/images/bg4.png";
import propertyImg5 from "../assets/images/bg5.png";
import "./Home.css";

function Home() {
  const [activeTab, setActiveTab] = useState("Rent");
  const navigate = useNavigate();

  // Filters state (hero)
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    price: "",
  });

  // Property data (used for featured only)
  const properties = [
    { id: 1, title: "2BHK Apartment", location: "Bhaktapur", type: "Apartment", price: 15, image: propertyImg2 },
    { id: 2, title: "3BHK Apartment", location: "Bhaktapur", type: "Apartment", price: 25, image: propertyImg3 },
    { id: 3, title: "Studio Apartment", location: "Lalitpur", type: "Studio", price: 12, image: propertyImg4 },
    { id: 4, title: "Luxury Villa", location: "Kathmandu", type: "Villa", price: 80, image: propertyImg5 },
    { id: 5, title: "2BHK House", location: "Pokhara", type: "House", price: 35, image: propertyImg1 },
    { id: 6, title: "3BHK Villa", location: "Lalitpur", type: "Villa", price: 60, image: propertyImg2 },
  ];

  // FEATURED: show a static featured set (no hero filtering)
  const featuredProperties = properties.slice(0, 6);

  // navigate to rent/buy with query params
  const goToSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.set("location", filters.location);
    if (filters.type) params.set("type", filters.type);
    if (filters.price) params.set("price", filters.price); // low | mid | high (we map these in Rent/Buy)
    navigate(`/${activeTab.toLowerCase()}?${params.toString()}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section h-[60vh] relative flex items-center justify-start overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="slogan-container z-10 p-8 md:p-16 max-w-xl text-black">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">
            Easy way to find a perfect property
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide a complete service for the sale, purchase or rental of real estate
          </p>

          {/* Search Box with Tabs */}
          <div className="search-box">
            {/* Tabs */}
            <div className="search-tabs">
              <button className={activeTab === "Rent" ? "active" : ""} onClick={() => setActiveTab("Rent")}>Rent</button>
              <button className={activeTab === "Buy" ? "active" : ""} onClick={() => setActiveTab("Buy")}>Buy</button>
            </div>

            {/* Filters */}
            <div className="search-filters">
              <div>
                <label>Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                >
                  <option value="">Select Your City</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Chitwan">Chitwan</option>
                </select>
              </div>

              <div>
                <label>Property Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                >
                  <option value="">Choose Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Villa">Villa</option>
                  <option value="Studio">Studio</option>
                </select>
              </div>

              <div>
                <label>Price Range</label>
                <select
                  value={filters.price}
                  onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                >
                  <option value="">Choose Price Range</option>
                  <option value="low">Rs. 0 – 20 Lakh</option>
                  <option value="mid">Rs. 20 – 50 Lakh</option>
                  <option value="high">Rs. 50+ Lakh</option>
                </select>
              </div>

              <button onClick={goToSearch}>🔍 Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* New properties section (unchanged) */}
      <section className="section services">
        <div className="flex-1">
          <img src={propertyImg1} alt="Property Service" className="rounded-lg shadow-md" />
        </div>

        <div className="services-content">
          <h2>We’ve got new properties for everyone</h2>
          <p>One place to manage rentals, 600+ Apartments, 250+ Plots, and 60+ Villas. Start your journey with us today!</p>
          <ul>
            <li>🏢 600+ Apartments – modern living</li>
            <li>🌍 250+ Plots – build your dream</li>
            <li>🏡 60+ Villas – explore with us</li>
          </ul>
          <button onClick={() => navigate("/rent")}>Explore</button>
        </div>
      </section>

      {/* Featured Properties — now static featured list */}
      <section id="featured-properties" className="section featured-properties">
        <h2 className="section-title">Featured Properties</h2>
        <div className="featured-grid">
          {featuredProperties.length > 0 ? (
            featuredProperties.map((property) => (
              <div key={property.id} className="property-card">
                <img src={property.image} alt={property.title} />
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p>📍 {property.location}</p>
                  <p>🏠 {property.type}</p>
                  <p>💰 Rs. {property.price} Lakh</p>
                  <button>View Details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No featured properties found</p>
          )}
        </div>
      </section>


        {/* ================= Featured Agents ================= */}
        <section className="featured-agents">
          <div className="text-center mb-12">
            <h2>Our Featured Agents</h2>
            <p>
              Meet our trusted real estate agents who are ready to guide you in
              finding the perfect property. With years of experience and a
              passion for helping clients, they make buying, selling, or renting
              simple and stress-free.
            </p>
          </div>

          <div className="agents-grid">
            <div className="agent-card">
              <span className="listings-badge">51 Listings</span>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Agent"
              />
              <p>Kathmandu, Nepal</p>
              <h3>Sargam Silwal</h3>
              <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
              <button className="message-btn">Message</button>
              <button className="call-btn">📞</button>
            </div>

            <div className="agent-card">
              <span className="listings-badge">70 Listings</span>
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Agent"
              />
              <p>Pokhara, Nepal</p>
              <h3>Hari Ghimire</h3>
              <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
              <button className="message-btn">Message</button>
              <button className="call-btn">📞</button>
            </div>

            <div className="agent-card">
              <span className="listings-badge">60 Listings</span>
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="Agent"
              />
              <p>Chitwan, Nepal</p>
              <h3>Anil Thaukuri</h3>
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
            <button onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
          <div className="flex-1">
            <img
              src={propertyImg5}
              alt="Why Choose Us"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

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

export default Home;