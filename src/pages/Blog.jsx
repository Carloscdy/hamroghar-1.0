import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

// ✅ Images
import backgroundImage from "../assets/images/bg1.jpg";
import propertyImg1 from "../assets/images/bg.jpg";
import propertyImg2 from "../assets/images/bg2.jpg";
import propertyImg3 from "../assets/images/bg3.png";
import propertyImg5 from "../assets/images/bg5.png";

// ✅ Blog Data
const posts = [
  {
    id: 1,
    title: "Documents Needed to Sell Your House in Nepal",
    date: "March 30, 2025",
    views: "120",
    image: propertyImg1,
    content:
      "When selling your house in Nepal, you’ll need ownership documents, land registration certificate, tax clearance, and other legal paperwork.",
    details: `Selling a house in Nepal involves several legal and administrative steps.
    The most important documents include the Land Ownership Certificate (Lalpurja), updated land revenue tax clearance, and proof of citizenship.
    You’ll also need to submit an application at the Land Revenue Office for the official transfer of property.
    It is also recommended to have your property evaluated to determine its fair market value.
    If you’re selling through a real estate agent, make sure they are registered and trustworthy.
    Documentation ensures the sale is legally binding and prevents disputes later.
    A lawyer can help verify papers and confirm that the buyer is financially capable of finalizing the transaction.
    This extra step ensures peace of mind and avoids fraud.`,
  },
  {
    id: 2,
    title: "Effective Negotiation Strategies for Property Buyers",
    date: "March 18, 2025",
    views: "98",
    image: propertyImg2,
    content:
      "Negotiating property deals requires market research, patience, and knowing the seller’s motivations.",
    details: `Negotiating in real estate is both an art and a science.
    As a buyer in Nepal, the first step is to research property values in the local market so you know a fair price before making an offer.
    Understanding the seller’s urgency can give you an advantage.
    If the seller is relocating or needs quick cash, you may be able to negotiate a lower price.
    On the other hand, if the property is in high demand, you should focus on offering flexible payment terms rather than just a reduced price.
    Always put your terms in writing, and be ready to walk away if the deal doesn’t meet your expectations.
    A strong negotiation requires patience, clarity, and confidence.`,
  },
  {
    id: 3,
    title: "How to Find Reliable Tenants: A Landlord’s Guide",
    date: "March 12, 2025",
    views: "87",
    image: propertyImg3,
    content:
      "Finding reliable tenants is crucial for landlords. Screening, background checks, and clear agreements help avoid disputes.",
    details: `Being a landlord in Nepal can be rewarding, but it also comes with risks if you don’t choose tenants wisely.
    Start by conducting a background check, asking for references, and verifying employment or business stability.
    A written rental agreement is essential. Include terms like rent amount, due dates, late fees, and maintenance responsibilities.
    A clear contract reduces misunderstandings and protects both parties.
    Regular communication with your tenants also builds trust.
    Promptly addressing maintenance requests and keeping the property in good condition helps you attract and retain quality tenants.`,
  },
  {
    id: 4,
    title: "Top 10 Ways to Increase Your Property Value",
    date: "March 10, 2025",
    views: "142",
    image: propertyImg5,
    content:
      "Renovations, landscaping, and modern interiors can significantly boost your property’s value.",
    details: `Increasing property value doesn’t always mean major reconstruction.
    Simple improvements like painting walls, upgrading lighting, and maintaining a clean exterior can have a big impact.
    For larger returns, consider renovating kitchens and bathrooms, as these are the most attractive spaces for buyers.
    Landscaping and gardening also create a lasting first impression.
    Energy-efficient upgrades, such as solar panels or smart home technology, are becoming more popular in Nepal and can give your property an edge in the competitive market.`,
  },
];

// ✅ Blog Component
function Blog() {
  return (
    <div className="blog-page">
      {/* ✅ Blog Hero Section (Full Width) */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <p>
            Discover insights, tips, and strategies about real estate, property
            investment, and housing in Nepal.
          </p>
        </div>
      </section>

      {/* ✅ Blog Grid */}
      <section className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="excerpt">{post.content}</p>
              <div className="meta">
                <span>{post.date}</span>
                <span>{post.views} views</span>
              </div>
              <Link
                to={`/blog/${post.id}`}
                state={post}
                className="read-more"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ✅ Footer */}
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

export default Blog;